<?php
/**
 * Course & Lesson Manager Class
 *
 * @package WCLMS_Engine
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class WCLMS_Course_Manager {

    public function init() {
        add_action('init', array($this, 'register_courses_cpt'));
        add_action('init', array($this, 'register_lessons_cpt'));
    }

    /**
     * Register Courses CPT
     */
    public function register_courses_cpt() {
        $labels = array(
            'name'          => __('Academy Courses', 'wc-lms-engine'),
            'singular_name' => __('Course', 'wc-lms-engine'),
        );

        $args = array(
            'labels'       => $labels,
            'public'       => true,
            'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon'    => 'dashicons-welcome-learn-more',
            'show_in_rest' => true,
        );

        register_post_type('academy_course', $args);
    }

    /**
     * Register Lessons CPT
     */
    public function register_lessons_cpt() {
        $labels = array(
            'name'          => __('Course Lessons', 'wc-lms-engine'),
            'singular_name' => __('Lesson', 'wc-lms-engine'),
        );

        $args = array(
            'labels'       => $labels,
            'public'       => true,
            'supports'     => array('title', 'editor', 'thumbnail'),
            'menu_icon'    => 'dashicons-media-interactive',
            'show_in_rest' => true,
        );

        register_post_type('academy_lesson', $args);
    }
}
