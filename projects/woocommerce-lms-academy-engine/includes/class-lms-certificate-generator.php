<?php
/**
 * Student PDF Certificate Generator Class
 *
 * @package WCLMS_Engine
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

if (!defined('ABSPATH')) {
    exit;
}

class WCLMS_Certificate_Generator {

    public function init() {
        add_action('wp_ajax_wclms_generate_certificate', array($this, 'generate_student_certificate'));
    }

    /**
     * Generate downloadable certificate payload for completed students
     */
    public function generate_student_certificate() {
        check_ajax_referer('wclms_cert_nonce', 'security');

        $user_id   = get_current_user_id();
        $course_id = isset($_POST['course_id']) ? intval($_POST['course_id']) : 0;

        if ($user_id && $course_id) {
            $user_info = get_userdata($user_id);
            wp_send_json_success(array(
                'certificate_url' => home_url('/certificates/' . md5($user_id . '_' . $course_id) . '.pdf'),
                'student_name'    => $user_info->display_name,
                'issue_date'      => date('F j, Y')
            ));
        } else {
            wp_send_json_error(array('message' => 'Invalid user or course request.'));
        }
    }
}
