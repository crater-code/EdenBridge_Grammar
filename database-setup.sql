-- ============================================
-- Edenbridge Grammar School - Database Setup
-- ============================================
-- 
-- This SQL script creates the necessary database tables
-- for the Edenbridge Grammar School website
--
-- INSTRUCTIONS:
-- 1. Log in to Hostinger hPanel
-- 2. Go to "Databases" → "phpMyAdmin"
-- 3. Select your database from the left sidebar
-- 4. Click on "SQL" tab
-- 5. Copy and paste this entire script
-- 6. Click "Go" to execute
-- ============================================

-- Create applications table
CREATE TABLE IF NOT EXISTS `applications` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `child_age` VARCHAR(20) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT DEFAULT NULL,
  `status` ENUM('pending', 'reviewed', 'contacted', 'enrolled', 'rejected') DEFAULT 'pending',
  `notes` TEXT DEFAULT NULL,
  `submitted_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_email` (`email`),
  INDEX `idx_status` (`status`),
  INDEX `idx_submitted_at` (`submitted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create contact_messages table (for future contact form)
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `subject` VARCHAR(255) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT DEFAULT NULL,
  `status` ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  `submitted_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_email` (`email`),
  INDEX `idx_status` (`status`),
  INDEX `idx_submitted_at` (`submitted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create rate_limiting table (to prevent spam)
CREATE TABLE IF NOT EXISTS `rate_limiting` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip_address` VARCHAR(45) NOT NULL,
  `form_type` VARCHAR(50) NOT NULL,
  `submission_count` INT(11) DEFAULT 1,
  `first_submission` DATETIME NOT NULL,
  `last_submission` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_ip_form` (`ip_address`, `form_type`),
  INDEX `idx_ip_address` (`ip_address`),
  INDEX `idx_last_submission` (`last_submission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create admin_users table (for future admin panel)
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(255) DEFAULT NULL,
  `role` ENUM('admin', 'staff', 'viewer') DEFAULT 'viewer',
  `is_active` TINYINT(1) DEFAULT 1,
  `last_login` DATETIME DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_username` (`username`),
  UNIQUE KEY `unique_email` (`email`),
  INDEX `idx_username` (`username`),
  INDEX `idx_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (username: admin, password: ChangeMe123!)
-- IMPORTANT: Change this password immediately after first login!
INSERT INTO `admin_users` (`username`, `email`, `password_hash`, `full_name`, `role`, `is_active`, `created_at`)
VALUES (
  'admin',
  'admin@edenbridgegrammar.com',
  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- Password: ChangeMe123!
  'System Administrator',
  'admin',
  1,
  NOW()
);

-- Create activity_log table (for tracking admin actions)
CREATE TABLE IF NOT EXISTS `activity_log` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `admin_user_id` INT(11) UNSIGNED DEFAULT NULL,
  `action` VARCHAR(100) NOT NULL,
  `table_name` VARCHAR(100) DEFAULT NULL,
  `record_id` INT(11) UNSIGNED DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_admin_user_id` (`admin_user_id`),
  INDEX `idx_action` (`action`),
  INDEX `idx_created_at` (`created_at`),
  FOREIGN KEY (`admin_user_id`) REFERENCES `admin_users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these queries after setup to verify everything is created correctly

-- Check if all tables exist
SHOW TABLES;

-- Check applications table structure
DESCRIBE applications;

-- Check if default admin user was created
SELECT id, username, email, role, is_active FROM admin_users;

-- ============================================
-- USEFUL QUERIES FOR MANAGEMENT
-- ============================================

-- View all pending applications
-- SELECT * FROM applications WHERE status = 'pending' ORDER BY submitted_at DESC;

-- Count applications by status
-- SELECT status, COUNT(*) as count FROM applications GROUP BY status;

-- View recent applications (last 7 days)
-- SELECT * FROM applications WHERE submitted_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) ORDER BY submitted_at DESC;

-- Update application status
-- UPDATE applications SET status = 'reviewed', notes = 'Your notes here' WHERE id = 1;

-- Delete old rate limiting records (run periodically)
-- DELETE FROM rate_limiting WHERE last_submission < DATE_SUB(NOW(), INTERVAL 30 DAY);

-- ============================================
-- BACKUP RECOMMENDATION
-- ============================================
-- 
-- Set up automatic backups in Hostinger:
-- 1. Go to hPanel → Databases → phpMyAdmin
-- 2. Select your database
-- 3. Click "Export" tab
-- 4. Choose "Quick" export method
-- 5. Click "Go" to download backup
-- 
-- Schedule regular backups (weekly recommended)
-- ============================================

-- ============================================
-- SECURITY NOTES
-- ============================================
-- 
-- 1. Change the default admin password immediately
-- 2. Use strong passwords for database users
-- 3. Limit database user permissions (only grant necessary privileges)
-- 4. Keep phpMyAdmin access restricted
-- 5. Regularly update and patch your system
-- 6. Monitor the activity_log table for suspicious activity
-- 7. Set up SSL/HTTPS for your website
-- 8. Enable Hostinger's security features (firewall, malware scanner)
-- ============================================
