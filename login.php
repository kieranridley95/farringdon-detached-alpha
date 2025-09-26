<?php
session_start();

// hard-coded credentials (demo only)
$adminUser = 'admin';
$adminPass = 'admin';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($_POST['username']) ? trim($_POST['username']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if ($username === $adminUser && $password === $adminPass) {
        // mark session as logged in
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;

        // redirect to protected index
        header('Location: index.php');
        exit;
    } else {
        // invalid
        // you can redirect back with an error or display a message
        $_SESSION['login_error'] = 'Invalid username or password';
        header('Location: login.html');
        exit;
    }
}
?>
