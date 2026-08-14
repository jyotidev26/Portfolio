<?php
/**
 * Travel Booking Engine & Itinerary Calculator Class
 *
 * @package Travel_Tour_Services
 * @author Jyoti Prakash Chakma (Zend Certified PHP Specialist)
 */

class Booking_Engine {

    /**
     * Process tour reservation & calculate total cost with tax
     */
    public function create_booking(string $package_name, int $travelers, float $price_per_person): array {
        if ($travelers <= 0) {
            return array('status' => 'error', 'message' => 'Invalid number of travelers.');
        }

        $subtotal = $travelers * $price_per_person;
        $vat      = $subtotal * 0.05; // 5% VAT
        $total    = $subtotal + $vat;

        $pnr_code = 'EXP-' . strtoupper(substr(md5(uniqid()), 0, 6));

        return array(
            'status'         => 'success',
            'pnr_code'       => $pnr_code,
            'package_name'   => htmlspecialchars($package_name),
            'travelers'      => $travelers,
            'subtotal'       => $subtotal,
            'vat'            => $vat,
            'total_amount'   => $total,
            'booking_time'   => date('Y-m-d H:i:s')
        );
    }
}
