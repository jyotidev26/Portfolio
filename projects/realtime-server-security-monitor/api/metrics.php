<?php
/**
 * REST API Endpoint for Server Infrastructure Metrics
 *
 * @package Server_Monitor
 * @author Jyoti Prakash Chakma (Zend Certified PHP Engineer)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../includes/class-server-inspector.php';

$inspector = new Server_Inspector();
$metrics   = $inspector->get_live_metrics();

echo json_encode($metrics);
