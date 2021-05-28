<?php

class Config
{

    private string $dns;
    private string $username;
    private string $password;

    function __construct()
    {
        $this->dns = 'mysql:dbname=biz_kod;host=localhost';
        $this->username = 'root';
        $this->password = '';
    }

    private function getDns(): string
    {
        return $this->dns;
    }

    private function getUser(): string
    {
        return $this->username;
    }

    private function getPass(): string
    {
        return $this->password;
    }

    public function Connect(): PDO
    {
        $dns = $this->getDns();
        $user = $this->getUser();
        $pass = $this->getPass();
        try {
            $db = new PDO($dns, $user, $pass);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            die($exception->getMessage());
        }
        return $db;
    }
}




