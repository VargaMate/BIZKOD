<?php

class Session
{
    private string $session;

    function __construct(string $session = "Joe")
    {
        $this->session = $session;
    }

    public function getSession(): string
    {
        return $this->session;
    }

    public function checkSession(): string
    {
        $session = $this->getSession();
        if (isset($session) && !empty(isset($session))) {
            $result = $session;
        } else {
            $result = '';
        }
        return $result;
    }

    public function setSession()
    {
        $email = $this->getSession();
        session_start();
        $_SESSION['email'] = $email;
    }

    public function removeSession()
    {
        $session = $this->getSession();
        if (isset($session) && !empty($session)) {
            session_destroy();
        }
    }
}