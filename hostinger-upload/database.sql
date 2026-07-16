-- Edenbridge Grammar School Database Setup
-- Database: u993881703_new_react
-- SIMPLE VERSION - Just the essential tables

-- Table 1: Applications (from Apply Now form)
CREATE TABLE IF NOT EXISTS `applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `child_age` varchar(20) NOT NULL,
  `message` text,
  `ip_address` varchar(50) DEFAULT NULL,
  `user_agent` text,
  `submitted_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`),
  KEY `submitted_at` (`submitted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table 2: Contact Messages (from Contact form)
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `subject` varchar(255) DEFAULT 'General Inquiry',
  `message` text NOT NULL,
  `ip_address` varchar(50) DEFAULT NULL,
  `user_agent` text,
  `submitted_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `email` (`email`),
  KEY `submitted_at` (`submitted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
