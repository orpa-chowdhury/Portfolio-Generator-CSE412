<?php
// Start the session to store user session data
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - Portfolio Builder</title>
    <link rel="stylesheet" href="login.css" />
  </head>
  <body>
  <header>
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="index.html">Generate Portfolio</a>
        </div>
        <div class="navbar-links">
          <ul>
            <li><a href="register.html">Register</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Login Form -->
    <div class="login-container">
      <div class="login-content">
        <h2>Login to Your Account</h2>
        <form action="login_action.php" method="POST">
          <div class="input-group">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account? <a href="register.html">Register here</a></p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer bg-dark">
      <div class="container">
        <div class="footer-content text-center">
          <p class="fs-15">&copy;Copyright 2025. All Rights Reserved - <span>Generate Portfolio</span></p>
        </div>
      </div>
    </footer>
  </body>
</html>
