<?php
/**
 * Database Transient & Cache Optimizer Class
 *
 * @package WC_Speed_Booster
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class WC_DB_Optimizer {

    public function register_hooks() {
        add_action('wcsb_daily_cleanup_event', array($this, 'clean_expired_transients'));
        
        if (!wp_next_scheduled('wcsb_daily_cleanup_event')) {
            wp_schedule_event(time(), 'daily', 'wcsb_daily_cleanup_event');
        }
    }

    /**
     * Clean expired WooCommerce transients to reduce MySQL database bloat
     */
    public function clean_expired_transients() {
        global $wpdb;

        $time = time();
        $sql  = "DELETE a, b FROM {$wpdb->options} a 
                 INNER JOIN {$wpdb->options} b ON a.option_name = REPLACE(b.option_name, '_timeout', '') 
                 WHERE a.option_name LIKE '_transient_wc_%' 
                 AND b.option_name LIKE '_transient_timeout_wc_%' 
                 AND b.option_value < %d";

        $wpdb->query($wpdb->prepare($sql, $time));
    }
}
