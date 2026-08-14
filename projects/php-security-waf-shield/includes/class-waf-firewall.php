<?php
/**
 * WAF Firewall Rule Engine Class
 * Blocks SQL Injection, XSS, Path Traversal, and Command Injection in real time.
 *
 * @package PHP_WAF_Shield
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

class PHP_WAF_Firewall {

    /**
     * Dangerous Regex Security Attack Signatures
     */
    private $blacklisted_patterns = array(
        'sql_injection'    => '/(\b(union|select|insert|update|delete|drop|alter|truncate|exec|load_file|outfile)\b)/i',
        'xss_attack'       => '/(<script\b[^>]*>.*?<\/script>|javascript:|onload=|onerror=|onclick=)/i',
        'path_traversal'   => '/(\.\.\/|\.\.\\\\|\/etc\/passwd|\/etc\/shadow)/i',
        'remote_cmd_exec'  => '/(base64_decode|eval\(|system\(|exec\(|passthru\(|shell_exec\()/i'
    );

    /**
     * Inspect GET, POST, COOKIE, and Request URI payloads
     */
    public function inspect_incoming_request() {
        $request_data = array_merge($_GET, $_POST, $_COOKIE);

        foreach ($request_data as $key => $val) {
            if (is_array($val)) {
                $val = json_encode($val);
            }
            $this->sanitize_and_evaluate($key, $val);
        }

        // Check Request URI for path traversal attempts
        if (isset($_SERVER['REQUEST_URI'])) {
            $this->sanitize_and_evaluate('REQUEST_URI', $_SERVER['REQUEST_URI']);
        }
    }

    /**
     * Evaluate string payload against threat signatures
     */
    private function sanitize_and_evaluate($param_name, $value) {
        foreach ($this->blacklisted_patterns as $threat_type => $pattern) {
            if (preg_match($pattern, $value)) {
                $this->block_attack($threat_type, $param_name, $value);
            }
        }
    }

    /**
     * Block malicious request with HTTP 403 Forbidden
     */
    private function block_attack($threat_type, $param_name, $value) {
        header('HTTP/1.1 403 Forbidden');
        header('Content-Type: text/html; charset=utf-8');

        $ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN_IP';
        $log_entry = sprintf("[%s] SECURITY ALERT: Blocked %s from IP %s on param '%s'\n", date('Y-m-d H:i:s'), strtoupper($threat_type), $ip, $param_name);

        error_log($log_entry);

        die('
            <!DOCTYPE html>
            <html lang="en">
            <head><title>403 Security Violation | JyotiTech WAF</title></head>
            <body style="background:#0F172A; color:#F8FAFC; font-family:sans-serif; text-align:center; padding:100px 20px;">
                <h1 style="color:#EF4444;">🛡️ 403 Access Denied - Security Threat Blocked</h1>
                <p>Your request was flagged and blocked by JyotiTech Web Application Firewall (WAF).</p>
                <p style="font-family:monospace; color:#94A3B8;">Threat Signature: ' . htmlspecialchars($threat_type) . ' | Client IP: ' . htmlspecialchars($ip) . '</p>
            </body>
            </html>
        ');
    }
}
