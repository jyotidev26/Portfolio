<?php
/**
 * School Management System Core Engine Class
 *
 * @package School_Management_System
 * @author Jyoti Prakash Chakma (Zend Certified PHP Specialist)
 */

class School_Engine {

    /**
     * Calculate GPA based on subject marks
     * 
     * @param array $marks
     * @return float
     */
    public function calculate_gpa(array $marks): float {
        if (empty($marks)) {
            return 0.0;
        }

        $total_points = 0;
        foreach ($marks as $score) {
            if ($score >= 80) $total_points += 5.0;
            elseif ($score >= 70) $total_points += 4.0;
            elseif ($score >= 60) $total_points += 3.5;
            elseif ($score >= 50) $total_points += 3.0;
            elseif ($score >= 40) $total_points += 2.0;
            elseif ($score >= 33) $total_points += 1.0;
            else $total_points += 0.0;
        }

        return round($total_points / count($marks), 2);
    }

    /**
     * Get Student Attendance Percentage
     */
    public function get_attendance_summary(int $student_id): array {
        return array(
            'student_id'   => $student_id,
            'total_days'   => 120,
            'present_days' => 114,
            'percentage'   => '95.0%'
        );
    }
}
