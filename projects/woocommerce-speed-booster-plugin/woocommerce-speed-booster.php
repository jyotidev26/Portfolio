<?php
/**
 * Plugin Name: WooCommerce Speed & Checkout Booster
 * Plugin URI: https://github.com/jyotidev26/woocommerce-speed-booster-plugin
 * Description: Enterprise-grade WooCommerce speed optimization plugin. Cleans bloated assets, optimizes cart/checkout scripts, enables Redis caching hooks, and reduces server TTFB.
 * Version: 1.0.0
 * Author: Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 * Author URI: https://jyotidev26.github.io/Portfolio/
 * License: GPLv2 or later
 * Text Domain: wc-speed-booster
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Define Plugin Constants
define('WCSB_VERSION', '1.0.0');
define('WCSB_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WCSB_PLUGIN_URL', plugin_dir_url(__FILE__));

// Require Core Architecture Classes
require_once WCSB_PLUGIN_DIR . 'includes/class-wc-speed-booster.php';
require_once WCSB_PLUGIN_DIR . 'includes/class-wc-asset-cleaner.php';
require_once WCSB_PLUGIN_DIR . 'includes/class-wc-ajax-checkout.php';
require_once WCSB_PLUGIN_DIR . 'includes/class-wc-db-optimizer.php';

/**
 * Initialize Plugin Engine
 */
function run_wc_speed_booster() {
    $plugin = new WC_Speed_Booster();
    $plugin->init();
}
add_action('plugins_loaded', 'run_wc_speed_booster');
