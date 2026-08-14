<?php
/**
 * Ajax Fast Checkout Handler Class
 *
 * @package WC_Speed_Booster
 * @author Jyoti Prakash Chakma
 */

if (!defined('ABSPATH')) {
    exit;
}

class WC_Ajax_Checkout {

    public function register_hooks() {
        add_action('wp_ajax_wcsb_fast_checkout', array($this, 'process_fast_checkout'));
        add_action('wp_ajax_nopriv_wcsb_fast_checkout', array($this, 'process_fast_checkout'));
    }

    /**
     * Process high-speed Ajax cart update and checkout
     */
    public function process_fast_checkout() {
        check_ajax_referer('wcsb_nonce', 'security');

        $product_id = isset($_POST['product_id']) ? intval($_POST['product_id']) : 0;
        $quantity   = isset($_POST['quantity']) ? intval($_POST['quantity']) : 1;

        if ($product_id > 0 && function_exists('WC')) {
            WC()->cart->add_to_cart($product_id, $quantity);
            wp_send_json_success(array(
                'message'  => __('Product added to cart instantly!', 'wc-speed-booster'),
                'cart_count' => WC()->cart->get_cart_contents_count(),
                'cart_total' => WC()->cart->get_cart_total()
            ));
        } else {
            wp_send_json_error(array('message' => __('Invalid product ID.', 'wc-speed-booster')));
        }
    }
}
