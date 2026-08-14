<?php
/**
 * File Integrity & Malware Scanner Class
 *
 * @package PHP_WAF_Shield
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

class PHP_Security_Scanner {

    private $scan_directory;
    private $suspicious_functions = array('eval', 'base64_decode', 'gzinflate', 'str_rot13', 'system', 'exec');

    public function __construct($directory = null) {
        $this->scan_directory = $directory ? $directory : __DIR__ . '/../';
    }

    /**
     * Perform deep file integrity scan
     */
    public function scan_files() {
        $infected_files = array();
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($this->scan_directory));

        foreach ($iterator as $file) {
            if ($file->isDir() || $file->getExtension() !== 'php') {
                continue;
            }

            $content = file_get_contents($file->getPathname());
            foreach ($this->suspicious_functions as $func) {
                if (preg_match('/\b' . $func . '\s*\(/i', $content)) {
                    $infected_files[] = array(
                        'file'     => $file->getPathname(),
                        'function' => $func,
                        'size'     => filesize($file->getPathname())
                    );
                    break;
                }
            }
        }

        return $infected_files;
    }
}
