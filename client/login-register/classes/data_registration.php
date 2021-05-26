<?php
include_once 'Registration.php';
$user = new Registration($_POST['f-name'], $_POST['l-name'], $_POST['password'],$_POST['email'], $_POST['register']);
$user->runRegistration();