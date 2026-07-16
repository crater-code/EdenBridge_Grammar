# Edenbridge Grammar School - Backend Setup Guide

## 📋 Overview

This guide will help you set up the PHP backend and MySQL database for the Edenbridge Grammar School website on Hostinger.

## 📁 Files Created

### PHP Files (in `/api` folder)
1. **submit-application.php** - Handles application form submissions
2. **submit-contact.php** - Handles contact form submissions (future use)
3. **config.php** - Database configuration and settings

### SQL File
1. **database-setup.sql** - Creates all necessary database tables

## 🚀 Step-by-Step Setup on Hostinger

### Step 1: Upload PHP Files

1. Log in to your **Hostinger hPanel**
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` (or your website root directory)
4. Create a new folder called `api`
5. Upload all PHP files from the `api` folder to `public_html/api/`

### Step 2: Create MySQL Database

1. In Hostinger hPanel, go to **Databases** → **MySQL Databases**
2. Click **Create New Database**
3. Enter database name: `edenbridge_db` (or your preferred name)
4. Click **Create**
5. Note down the database credentials:
   - Database name
   - Database username
   - Database password
   - Database host (usually `localhost`)

### Step 3: Configure Database Connection

1. Open `api/config.php` in File Manager
2. Update the following constants with your database credentials:

```php
define('DB_HOST', 'localhost');              // Usually 'localhost'
define('DB_USER', 'your_database_user');     // Your database username
define('DB_PASS', 'your_database_password'); // Your database password
define('DB_NAME', 'edenbridge_db');          // Your database name
```

3. Update admin email:
```php
define('ADMIN_EMAIL', 'info@edenbridgegrammar.com');
```

4. Update site URL:
```php
define('SITE_URL', 'https://edenbridgegrammar.com');
```

5. Save the file

### Step 4: Set Up Database Tables

1. In Hostinger hPanel, go to **Databases** → **phpMyAdmin**
2. Select your database from the left sidebar
3. Click on the **SQL** tab
4. Open `database-setup.sql` file
5. Copy the entire SQL script
6. Paste it into the SQL query box
7. Click **Go** to execute
8. You should see success messages for each table created

### Step 5: Verify Database Setup

Run these queries in phpMyAdmin to verify:

```sql
-- Check if all tables exist
SHOW TABLES;

-- Check applications table
SELECT * FROM applications;

-- Check admin user
SELECT id, username, email, role FROM admin_users;
```

You should see 5 tables:
- applications
- contact_messages
- rate_limiting
- admin_users
- activity_log

### Step 6: Update React Application

Update `src/pages/ApplyNow.js` to use the PHP backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('https://yourdomain.com/api/submit-application.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      setLoading(false);
      setSubmitted(true);
      console.log('Application submitted:', result);
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    setLoading(false);
    alert('Error submitting application: ' + error.message);
    console.error('Submission error:', error);
  }
};
```

### Step 7: Test the Form

1. Go to your website's Apply Now page
2. Fill out the form with test data
3. Submit the form
4. Check phpMyAdmin to see if the data was saved:
   ```sql
   SELECT * FROM applications ORDER BY submitted_at DESC LIMIT 1;
   ```
5. Check your admin email for notification

## 🔒 Security Checklist

- [ ] Change default admin password in database
- [ ] Update `config.php` with strong database password
- [ ] Set proper file permissions (644 for PHP files)
- [ ] Enable HTTPS/SSL on your domain
- [ ] Test rate limiting functionality
- [ ] Set up regular database backups
- [ ] Enable Hostinger firewall
- [ ] Keep PHP version updated

## 📧 Email Configuration

### Option 1: PHP mail() Function (Default)
The scripts use PHP's built-in `mail()` function. This works on most Hostinger plans.

### Option 2: SMTP (Recommended for better deliverability)
For better email deliverability, consider using SMTP. Install PHPMailer:

1. Download PHPMailer from GitHub
2. Upload to `api/vendor/phpmailer/`
3. Update email functions to use SMTP

## 🗄️ Database Management

### View All Applications
```sql
SELECT * FROM applications ORDER BY submitted_at DESC;
```

### Count Applications by Status
```sql
SELECT status, COUNT(*) as count 
FROM applications 
GROUP BY status;
```

### Update Application Status
```sql
UPDATE applications 
SET status = 'reviewed', notes = 'Contacted parent' 
WHERE id = 1;
```

### Export Applications to CSV
1. Go to phpMyAdmin
2. Select `applications` table
3. Click **Export** tab
4. Choose **CSV** format
5. Click **Go**

## 🔧 Troubleshooting

### Issue: "Database connection failed"
**Solution:** Check `config.php` credentials match your database

### Issue: "CORS error" in browser console
**Solution:** Verify `Access-Control-Allow-Origin` header in PHP files

### Issue: Emails not sending
**Solution:** 
1. Check spam folder
2. Verify ADMIN_EMAIL in config.php
3. Contact Hostinger support to enable mail() function

### Issue: Form submits but no data in database
**Solution:**
1. Check PHP error logs in File Manager
2. Verify database table exists
3. Check file permissions

## 📊 Monitoring

### Check Recent Submissions
```sql
SELECT * FROM applications 
WHERE submitted_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) 
ORDER BY submitted_at DESC;
```

### Check Rate Limiting
```sql
SELECT * FROM rate_limiting 
WHERE last_submission >= DATE_SUB(NOW(), INTERVAL 24 HOUR);
```

### View Activity Log
```sql
SELECT * FROM activity_log 
ORDER BY created_at DESC 
LIMIT 50;
```

## 🔄 Backup Procedure

### Manual Backup
1. Go to phpMyAdmin
2. Select your database
3. Click **Export**
4. Choose **Quick** method
5. Click **Go**
6. Save the .sql file

### Automated Backup (Recommended)
1. Set up cron job in Hostinger
2. Schedule weekly database exports
3. Store backups in secure location

## 📞 Support

If you encounter issues:
1. Check Hostinger documentation
2. Review PHP error logs in File Manager
3. Contact Hostinger support
4. Check database connection in phpMyAdmin

## 🎯 Next Steps

1. ✅ Set up database and PHP files
2. ✅ Test form submission
3. ✅ Configure email notifications
4. ⬜ Create admin panel (optional)
5. ⬜ Set up automated backups
6. ⬜ Monitor submissions regularly
7. ⬜ Implement additional security measures

## 📝 Default Admin Credentials

**Username:** admin  
**Password:** ChangeMe123!  
**⚠️ IMPORTANT:** Change this password immediately!

To change password:
```sql
UPDATE admin_users 
SET password_hash = PASSWORD('YourNewPassword') 
WHERE username = 'admin';
```

## 🌐 API Endpoints

Once deployed, your API endpoints will be:

- **Application Form:** `https://yourdomain.com/api/submit-application.php`
- **Contact Form:** `https://yourdomain.com/api/submit-contact.php`

Replace `yourdomain.com` with your actual domain.

---

**Setup Complete!** Your backend is now ready to handle form submissions.
