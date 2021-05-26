<?php
include_once 'Login.php';
$user = new Login($_POST['email'], $_POST['password'],$_POST['login']);
$user->runLogin();