<?php
/**
 * Theme Speed Optimizer Class
 * Disables bloatware, emoji scripts, and embed assets to guarantee sub-second page loads.
 *
 * @package JyotiTech_Theme
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class JyotiTech_Theme_Optimizer {

    public function init() {
        add_action('init', array($this, 'disable_emojis'));
        add_action('wp_footer', array($this, 'deregister_wp_embed'));
    }

    /**
     * Remove WP Emojis scripts & inline styles
     */
    public function disable_emojis() {
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('admin_print_scripts', 'print_emoji_detection_script');
        remove_action('wp_print_styles', 'print_emoji_styles');
        remove_action('admin_print_styles', 'print_emoji_styles');
        remove_filter('the_content_feed', 'wp_staticize_emoji');
        remove_filter('comment_text_rss', 'wp_staticize_emoji');
        remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    }

    /**
     * Deregister wp-embed.js script
     */
    public function deregister_wp_embed() {
        wp_deregister_script('wp-embed');
    }
}
