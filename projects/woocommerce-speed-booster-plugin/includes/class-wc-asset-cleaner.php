<?php
/**
 * WooCommerce Asset Cleaner Class
 * Dequeues unnecessary scripts/styles on non-WooCommerce pages to boost Core Web Vitals.
 *
 * @package WC_Speed_Booster
 * @author Jyoti Prakash Chakma
 */

if (!defined('ABSPATH')) {
    exit;
}

class WC_Asset_Cleaner {

    public function register_hooks() {
        add_action('wp_enqueue_scripts', array($this, 'dequeue_unnecessary_assets'), 99);
        add_filter('script_loader_tag', array($this, 'add_defer_attribute'), 10, 3);
    }

    /**
     * Dequeue WooCommerce scripts on non-shop pages
     */
    public function dequeue_unnecessary_assets() {
        if (function_exists('is_woocommerce')) {
            if (!is_woocommerce() && !is_cart() && !is_checkout()) {
                // Dequeue WC styles
                wp_dequeue_style('woocommerce-layout');
                wp_dequeue_style('woocommerce-smallscreen');
                wp_dequeue_style('woocommerce-general');
                wp_dequeue_style('select2');
                
                // Dequeue WC scripts
                wp_dequeue_script('wc-add-to-cart');
                wp_dequeue_script('woocommerce');
                wp_dequeue_script('select2');
            }
        }
    }

    /**
     * Add Defer attributes to non-critical JS files
     */
    public function add_defer_attribute($tag, $handle, $src) {
        if (is_admin()) {
            return $tag;
        }

        $defer_scripts = array('wc-cart-fragments', 'wc-add-to-cart-variation');

        if (in_array($handle, $defer_scripts, true)) {
            return str_replace(' src', ' defer="defer" src', $tag);
        }

        return $tag;
    }
}
