<?php
include_once 'Session.php';
session_start();
$session = new Session($_SESSION['email']);
echo $session->checkSession() . '<br>';
echo 'success';
