<?php
/**
 * IP Rate Limiting & Anti-Brute-Force Protection Class
 *
 * @package PHP_WAF_Shield
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

class PHP_Rate_Limiter {

    private $limit = 60; // Max 60 requests per minute
    private $time_window = 60; // 60 seconds

    /**
     * Enforce Rate Limits based on IP address
     */
    public function check_rate_limit() {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $key = 'rate_limit_' . md5($ip);

        session_start();
        $current_time = time();

        if (!isset($_SESSION[$key])) {
            $_SESSION[$key] = array('count' => 1, 'start_time' => $current_time);
            return true;
        }

        if ($current_time - $_SESSION[$key]['start_time'] < $this->time_window) {
            $_SESSION[$key]['count']++;
            if ($_SESSION[$key]['count'] > $this->limit) {
                header('HTTP/1.1 429 Too Many Requests');
                header('Retry-After: 60');
                die('Rate limit exceeded. Please wait 60 seconds.');
            }
        } else {
            $_SESSION[$key] = array('count' => 1, 'start_time' => $current_time);
        }

        return true;
    }
}
