<?php
$servername = "localhost";
$username = "root";  // Change if necessary
$password = "";      // Change if necessary
$database = "portfolio_db";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
