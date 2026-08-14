<?php
/**
 * WooCommerce Subscriptions & Enrollment Integration Class
 *
 * @package WCLMS_Engine
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class WCLMS_Subscription_Checkout {

    public function init() {
        add_action('woocommerce_payment_complete', array($this, 'auto_enroll_student'));
    }

    /**
     * Automatically enroll student into course after WooCommerce order completion
     */
    public function auto_enroll_student($order_id) {
        if (!$order_id) {
            return;
        }

        $order = wc_get_order($order_id);
        $user_id = $order->get_user_id();

        foreach ($order->get_items() as $item) {
            $product_id = $item->get_product_id();
            $course_id  = get_post_meta($product_id, '_linked_course_id', true);

            if ($course_id && $user_id) {
                // Register student enrollment meta
                update_user_meta($user_id, '_enrolled_course_' . $course_id, time());
            }
        }
    }
}
