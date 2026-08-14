<?php
/**
 * Justis Legal Case & Consultation Scheduler Class
 *
 * @package Justis_Legal_Portal
 * @author Jyoti Prakash Chakma (Zend Certified PHP Specialist)
 */

class Case_Scheduler {

    /**
     * Book a confidential legal consultation
     */
    public function schedule_consultation(array $data): array {
        if (empty($data['client_name']) || empty($data['legal_area'])) {
            return array('status' => 'error', 'message' => 'Client name and legal practice area are required.');
        }

        $booking_ref = 'JST-' . strtoupper(substr(md5(uniqid()), 0, 8));

        return array(
            'status'        => 'success',
            'booking_ref'   => $booking_ref,
            'client_name'   => htmlspecialchars($data['client_name']),
            'practice_area' => htmlspecialchars($data['legal_area']),
            'scheduled_at'  => date('Y-m-d H:i:s'),
            'message'       => 'Consultation successfully scheduled with senior counsel.'
        );
    }
}
