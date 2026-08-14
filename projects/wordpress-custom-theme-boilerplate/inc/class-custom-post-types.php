<?php
/**
 * Custom Post Types Registration Class
 * Registers Custom Post Types for Corporate Portfolio, Services, and Case Studies.
 *
 * @package JyotiTech_Theme
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class JyotiTech_Custom_Post_Types {

    public function init() {
        add_action('init', array($this, 'register_portfolio_cpt'));
        add_action('init', array($this, 'register_services_cpt'));
    }

    /**
     * Register Corporate Portfolio CPT
     */
    public function register_portfolio_cpt() {
        $labels = array(
            'name'          => __('Portfolios', 'jyotitech-theme'),
            'singular_name' => __('Portfolio', 'jyotitech-theme'),
            'add_new_item'  => __('Add New Portfolio Project', 'jyotitech-theme'),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'has_archive'        => true,
            'rewrite'            => array('slug' => 'portfolios'),
            'menu_icon'          => 'dashicons-portfolio',
            'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
            'show_in_rest'       => true,
        );

        register_post_type('portfolio', $args);
    }

    /**
     * Register Corporate Services CPT
     */
    public function register_services_cpt() {
        $labels = array(
            'name'          => __('Services', 'jyotitech-theme'),
            'singular_name' => __('Service', 'jyotitech-theme'),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'menu_icon'          => 'dashicons-hammer',
            'supports'           => array('title', 'editor', 'thumbnail'),
            'show_in_rest'       => true,
        );

        register_post_type('service', $args);
    }
}
