<?php
/**
 * Plugin Name: WooCommerce LMS & Academy Engine
 * Plugin URI: https://github.com/jyotidev26/woocommerce-lms-academy-engine
 * Description: Enterprise LMS & Membership Integration engine for WooCommerce. Handles automated student enrollment, subscription billing, video CDN security, and PDF certificate generation.
 * Version: 1.0.0
 * Author: Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 * Author URI: https://jyotidev26.github.io/Portfolio/
 * License: GPLv2 or later
 * Text Domain: wc-lms-engine
 */

if (!defined('ABSPATH')) {
    exit;
}

define('WCLMS_VERSION', '1.0.0');
define('WCLMS_DIR', plugin_dir_path(__FILE__));

require_once WCLMS_DIR . 'includes/class-lms-course-manager.php';
require_once WCLMS_DIR . 'includes/class-lms-subscription-checkout.php';
require_once WCLMS_DIR . 'includes/class-lms-certificate-generator.php';

function run_wc_lms_academy_engine() {
    $course_mgr  = new WCLMS_Course_Manager();
    $sub_checkout = new WCLMS_Subscription_Checkout();
    $cert_gen    = new WCLMS_Certificate_Generator();

    $course_mgr->init();
    $sub_checkout->init();
    $cert_gen->init();
}
add_action('plugins_loaded', 'run_wc_lms_academy_engine');
