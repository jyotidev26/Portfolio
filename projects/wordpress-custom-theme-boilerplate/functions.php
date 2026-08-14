<?php
/**
 * JyotiTech Theme Architecture Engine
 *
 * @package JyotiTech_Theme
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

define('JYOTITECH_THEME_VERSION', '1.0.0');
define('JYOTITECH_THEME_DIR', get_template_directory() . '/');
define('JYOTITECH_THEME_URI', get_template_directory_uri() . '/');

// Include OOP Theme Components
require_once JYOTITECH_THEME_DIR . 'inc/class-custom-post-types.php';
require_once JYOTITECH_THEME_DIR . 'inc/class-theme-optimizer.php';

/**
 * Setup Theme Features
 */
function jyotitech_theme_setup() {
    // Add default title tag support
    add_theme_support('title-tag');

    // Add post thumbnails support
    add_theme_support('post-thumbnails');

    // Custom logo support
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register Navigation Menus
    register_nav_menus(array(
        'primary-menu' => __('Primary Navigation Menu', 'jyotitech-theme'),
        'footer-menu'  => __('Footer Menu', 'jyotitech-theme'),
    ));
}
add_action('after_setup_theme', 'jyotitech_theme_setup');

/**
 * Enqueue Theme Styles & Scripts
 */
function jyotitech_theme_scripts() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap', array(), null);
    wp_enqueue_style('jyotitech-style', get_stylesheet_uri(), array(), JYOTITECH_THEME_VERSION);
}
add_action('wp_enqueue_scripts', 'jyotitech_theme_scripts');

// Initialize Custom Post Types and Optimization
$jyotitech_cpt = new JyotiTech_Custom_Post_Types();
$jyotitech_cpt->init();

$jyotitech_optimizer = new JyotiTech_Theme_Optimizer();
$jyotitech_optimizer->init();
