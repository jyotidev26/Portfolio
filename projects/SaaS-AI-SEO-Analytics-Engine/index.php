<?php
require_once __DIR__ . '/includes/class-seo-analyzer.php';

use JyotiTech\SEOEngine\SEOAnalyzer;

$analyzer = new SEOAnalyzer($_GET['url'] ?? 'https://jyotidev26.github.io/Portfolio/');
$auditData = $analyzer->runFullAudit();

if (isset($_GET['api']) && $_GET['api'] === 'true') {
    header('Content-Type: application/json');
    echo json_encode($auditData, JSON_PRETTY_PRINT);
    exit;
}

// Redirect to index.html for static frontend presentation
include __DIR__ . '/index.html';
