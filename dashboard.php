<?php
session_start();  // Start the session

// Check if the user is logged in, if not, redirect to login page
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");  // Redirect to login page if not logged in
    exit();  // Stop further script execution
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - Portfolio Builder</title>
    <link rel="stylesheet" href="dashboard.css" />
    <link rel="stylesheet" href="register.css" />
  </head>
  <body>
  <header>
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="index.html">Generate Portfolio</a>
        </div>
        <div class="navbar-links">
          <ul>
            <li><a href="logout.php">Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Sidebar and Main Content -->
    <div class="main-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <ul>
            
          <li><a href="dashboard.php">Dashboard</a></li>
          <li><a href="new-portfolio.html">New Portfolio</a></li>
          <li><a href="edit-portfolio.php">Edit Portfolios</a></li>
          <li><a href="change_password.php">Change Password</a></li>
          <li><a href="settings.php">Settings</a></li>
          <li><a href="logout.php">Logout</a></li>
        </ul>
      </div>

     <!-- Main Content -->
<div class="content">
    <h2>Welcome to Your Dashboard!</h2>
    <p>
        Here, you can manage your portfolios, explore templates, and access
        features that help you build a standout portfolio.
    </p>
    <img src="assets/images/d1.png" alt="Dashboard Overview" class="dashboard-image">
</div>


        <footer class = "footer bg-dark">
            <div class="container">
                <div class = "footer-content text-center">
                    <p class="fs-15">&copy;Copyright 2025. All Rights Reserved - <span>Generate Portfolio</span></p>
                </div>
            </div>
        </footer>
  </body>
</html>
