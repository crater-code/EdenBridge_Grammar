<?php
/**
 * Database Connection Test
 * Visit: yourdomain.com/api/test-connection.php
 */

require_once __DIR__ . '/config.php';

echo "<!DOCTYPE html>";
echo "<html><head>";
echo "<style>";
echo "body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }";
echo ".container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }";
echo "h1 { color: #092012; border-bottom: 3px solid #f2e6b1; padding-bottom: 10px; }";
echo "h2 { color: #092012; margin-top: 30px; }";
echo ".success { color: green; padding: 10px; background: #e8f5e9; border-left: 4px solid green; margin: 10px 0; }";
echo ".error { color: red; padding: 10px; background: #ffebee; border-left: 4px solid red; margin: 10px 0; }";
echo ".info { color: #333; padding: 10px; background: #e3f2fd; border-left: 4px solid #2196f3; margin: 10px 0; }";
echo "hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }";
echo "</style>";
echo "</head><body>";
echo "<div class='container'>";

echo "<h1>🔍 Database Connection Test</h1>";
echo "<p>Testing connection to: <strong>" . DB_NAME . "</strong></p>";
echo "<hr>";

// Test 1: Configuration
echo "<h2>1️⃣ Configuration Check</h2>";
echo "<div class='info'>";
echo "✅ DB_HOST: " . DB_HOST . "<br>";
echo "✅ DB_NAME: " . DB_NAME . "<br>";
echo "✅ DB_USER: " . DB_USER . "<br>";
echo "✅ DB_PASS: ***HIDDEN***<br>";
echo "</div>";
echo "<hr>";

// Test 2: Connection
echo "<h2>2️⃣ Connection Test</h2>";
try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        echo "<div class='error'>❌ Connection FAILED: " . $conn->connect_error . "</div>";
        echo "<p><strong>Common fixes:</strong></p>";
        echo "<ul>";
        echo "<li>Check database credentials in config.php</li>";
        echo "<li>Verify database exists in phpMyAdmin</li>";
        echo "<li>Check database user has correct permissions</li>";
        echo "</ul>";
        exit;
    }
    
    echo "<div class='success'>✅ Connection SUCCESSFUL!</div>";
    echo "<hr>";
    
    // Test 3: Tables
    echo "<h2>3️⃣ Tables Check</h2>";
    $tables = ['applications', 'contact_messages'];
    $all_good = true;
    
    foreach ($tables as $table) {
        $result = $conn->query("SHOW TABLES LIKE '$table'");
        if ($result && $result->num_rows > 0) {
            echo "<div class='success'>✅ Table '<strong>$table</strong>' exists</div>";
            
            // Count rows
            $count_result = $conn->query("SELECT COUNT(*) as count FROM $table");
            if ($count_result) {
                $row = $count_result->fetch_assoc();
                echo "<div class='info'>→ Total rows: <strong>" . $row['count'] . "</strong></div>";
            }
        } else {
            echo "<div class='error'>❌ Table '<strong>$table</strong>' NOT FOUND</div>";
            echo "<div class='info'>→ Run database-setup.sql in phpMyAdmin to create this table</div>";
            $all_good = false;
        }
    }
    
    $conn->close();
    echo "<hr>";
    
    if ($all_good) {
        echo "<h2>🎉 All Tests Passed!</h2>";
        echo "<div class='success'>";
        echo "<p><strong>Your database is configured correctly!</strong></p>";
        echo "<p>✅ Forms will now save data to the database</p>";
        echo "<p>✅ Check phpMyAdmin to see submitted data</p>";
        echo "</div>";
    } else {
        echo "<h2>⚠️ Action Required</h2>";
        echo "<div class='error'>";
        echo "<p><strong>Some tables are missing!</strong></p>";
        echo "<p>1. Go to phpMyAdmin</p>";
        echo "<p>2. Select database: " . DB_NAME . "</p>";
        echo "<p>3. Click 'SQL' tab</p>";
        echo "<p>4. Copy and paste contents of database-setup.sql</p>";
        echo "<p>5. Click 'Go' button</p>";
        echo "<p>6. Refresh this page</p>";
        echo "</div>";
    }
    
} catch (Exception $e) {
    echo "<div class='error'>❌ Error: " . $e->getMessage() . "</div>";
}

echo "</div>";
echo "</body></html>";
?>
