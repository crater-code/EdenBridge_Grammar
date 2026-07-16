<?php
/**
 * Edenbridge Grammar School - Database Configuration
 * File: config.php
 * 
 * IMPORTANT: Update these values with your Hostinger database credentials
 */

// Database Configuration
define('DB_HOST', 'localhost');           // Usually 'localhost' on Hostinger
define('DB_USER', 'your_database_user');  // Your Hostinger database username
define('DB_PASS', 'your_database_pass');  // Your Hostinger database password
define('DB_NAME', 'your_database_name');  // Your Hostinger database name

// Admin Email Configuration
define('ADMIN_EMAIL', 'info@edenbridgegrammar.com'); // Email to receive notifications

// Site Configuration
define('SITE_URL', 'https://edenbridgegrammar.com'); // Your website URL

// Security Settings
define('MAX_SUBMISSIONS_PER_IP', 5);      // Max submissions per IP per day
define('RATE_LIMIT_HOURS', 24);           // Rate limit time window in hours

// Timezone
date_default_timezone_set('Asia/Karachi');

/**
 * HOSTINGER SETUP INSTRUCTIONS:
 * 
 * 1. Log in to your Hostinger control panel (hPanel)
 * 2. Go to "Databases" → "MySQL Databases"
 * 3. Create a new database or use existing one
 * 4. Note down:
 *    - Database name
 *    - Database username
 *    - Database password
 *    - Database host (usually 'localhost')
 * 5. Update the DB_* constants above with your credentials
 * 6. Run the SQL script (database-setup.sql) in phpMyAdmin
 * 7. Update ADMIN_EMAIL with your email address
 * 8. Update SITE_URL with your actual domain
 */
?>
