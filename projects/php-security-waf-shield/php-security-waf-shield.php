<?php
/**
 * Plugin Name: PHP Security WAF & Vulnerability Shield
 * Plugin URI: https://github.com/jyotidev26/php-security-waf-shield
 * Description: Enterprise-grade Web Application Firewall (WAF), SQL Injection Shield, XSS Filter, and File Integrity Scanner built in OOP PHP 8+.
 * Version: 1.0.0
 * Author: Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 * Author URI: https://jyotidev26.github.io/Portfolio/
 * License: GPLv2 or later
 * Text Domain: php-waf-shield
 */

if (!defined('ABSPATH')) {
    // Standalone PHP Execution Guard
    if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
        die('Direct access forbidden.');
    }
}

define('WAF_SHIELD_VERSION', '1.0.0');
define('WAF_SHIELD_DIR', __DIR__ . '/');

require_once WAF_SHIELD_DIR . 'includes/class-waf-firewall.php';
require_once WAF_SHIELD_DIR . 'includes/class-security-scanner.php';
require_once WAF_SHIELD_DIR . 'includes/class-rate-limiter.php';

/**
 * Initialize WAF Security Firewall
 */
function run_php_waf_shield() {
    $firewall = new PHP_WAF_Firewall();
    $firewall->inspect_incoming_request();
}

// Auto-boot firewall on script initialization
run_php_waf_shield();
