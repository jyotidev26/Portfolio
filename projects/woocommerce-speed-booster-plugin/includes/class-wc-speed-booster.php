<?php
/**
 * Core Controller Class for WooCommerce Speed Booster
 *
 * @package WC_Speed_Booster
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class WC_Speed_Booster {

    /**
     * Asset Cleaner Instance
     */
    private $asset_cleaner;

    /**
     * Ajax Checkout Instance
     */
    private $ajax_checkout;

    /**
     * DB Optimizer Instance
     */
    private $db_optimizer;

    public function __construct() {
        $this->asset_cleaner = new WC_Asset_Cleaner();
        $this->ajax_checkout = new WC_Ajax_Checkout();
        $this->db_optimizer  = new WC_DB_Optimizer();
    }

    /**
     * Initialize all performance hooks
     */
    public function init() {
        // Enqueue asset optimization hooks
        $this->asset_cleaner->register_hooks();

        // Enable Ajax fast checkout hooks
        $this->ajax_checkout->register_hooks();

        // Schedule DB transient cleanup
        $this->db_optimizer->register_hooks();

        // Add admin status notice
        add_action('admin_notices', array($this, 'render_admin_notice'));
    }

    /**
     * Render Admin Dashboard Status Notice
     */
    public function render_admin_notice() {
        if (!current_user_can('manage_options')) {
            return;
        }
        ?>
        <div class="notice notice-success is-dismissible">
            <p><strong>[JyotiTech Speed Booster]:</strong> WooCommerce Performance Engine is Active & Optimizing TTFB / Asset Loading!</p>
        </div>
        <?php
    }
}
