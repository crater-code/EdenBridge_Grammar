<?php
/**
 * Edenbridge Grammar School - Application Form Handler
 * File: submit-application.php
 * 
 * This file handles the application form submissions from the website
 */

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Database configuration
require_once __DIR__ . '/config.php';

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

// Required fields
$required_fields = ['parentName', 'email', 'phone', 'childAge'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
    ]);
    exit();
}

// Sanitize input data
$parentName = htmlspecialchars(trim($data['parentName']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone']), ENT_QUOTES, 'UTF-8');
$childAge = htmlspecialchars(trim($data['childAge']), ENT_QUOTES, 'UTF-8');
$message = isset($data['message']) ? htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8') : '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Validate child age
$valid_ages = ['3-5', '6-8', '9-11', '12-14', '15-18'];
if (!in_array($childAge, $valid_ages)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid age range']);
    exit();
}

try {
    // Create database connection
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    
    // Set charset
    $conn->set_charset('utf8mb4');
    
    // Prepare SQL statement
    $stmt = $conn->prepare("
        INSERT INTO applications 
        (parent_name, email, phone, child_age, message, ip_address, user_agent, submitted_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    
    if (!$stmt) {
        throw new Exception('Prepare failed: ' . $conn->error);
    }
    
    // Get client info
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
    
    // Bind parameters
    $stmt->bind_param(
        'sssssss',
        $parentName,
        $email,
        $phone,
        $childAge,
        $message,
        $ipAddress,
        $userAgent
    );
    
    // Execute statement
    if (!$stmt->execute()) {
        throw new Exception('Execute failed: ' . $stmt->error);
    }
    
    $applicationId = $stmt->insert_id;
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
    
    // Send email notification (optional)
    sendEmailNotification($parentName, $email, $phone, $childAge, $message, $applicationId);
    
    // Return success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully',
        'applicationId' => $applicationId
    ]);
    
} catch (Exception $e) {
    // Log error
    error_log('Application submission error: ' . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred while processing your application. Please try again or contact us directly.'
    ]);
}

/**
 * Send email notification to admin
 */
function sendEmailNotification($parentName, $email, $phone, $childAge, $message, $applicationId) {
    $to = ADMIN_EMAIL;
    $subject = 'New Application Submission - Edenbridge Grammar';
    
    $emailMessage = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #092012; color: #f2e6b1; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #092012; }
            .value { color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Application Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Application ID:</span>
                    <span class='value'>#$applicationId</span>
                </div>
                <div class='field'>
                    <span class='label'>Parent/Guardian Name:</span>
                    <span class='value'>$parentName</span>
                </div>
                <div class='field'>
                    <span class='label'>Email:</span>
                    <span class='value'>$email</span>
                </div>
                <div class='field'>
                    <span class='label'>Phone:</span>
                    <span class='value'>$phone</span>
                </div>
                <div class='field'>
                    <span class='label'>Child's Age:</span>
                    <span class='value'>$childAge years</span>
                </div>
                <div class='field'>
                    <span class='label'>Message:</span>
                    <span class='value'>" . nl2br($message) . "</span>
                </div>
            </div>
            <div class='footer'>
                <p>This is an automated notification from Edenbridge Grammar School website.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Edenbridge Grammar <noreply@edenbridgegrammar.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send email
    @mail($to, $subject, $emailMessage, $headers);
}
?>
