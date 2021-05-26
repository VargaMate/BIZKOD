<?php
include_once 'db_config.php';

class Login
{
    private string $email;
    private string $password;
    private string $btn;

    function __construct(string $email, string $password, string $btn)
    {
        $this->email = $email;
        $this->password = $password;
        $this->btn = $btn;
    }

    private function getEmail(): string
    {
        return $this->email;
    }

    private function getPassword(): string
    {
        return $this->password;
    }
    private function getBtn(): string
    {
        return $this->btn;
    }

    private function routeFolder(): string
    {
        return '/BIZKOD/client/login-register/';
    }

    private function routeFile(): string
    {
        return $this->routeFolder() . 'classes/registered.php';
    }

    private function routeFileError(): string
    {
        return $this->routeFolder() . 'login-register.php';
    }

    private function validateBtn(): bool
    {
        $btn = $this->getBtn();
        if (isset($btn)) {
            return true;
        } else {
            return false;
        }
    }

    private function validateEmail(): string
    {
        $email = $this->getEmail();
        if (isset($email) && !empty($email)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $result = $email;
            } else {
                $result = "";
            }
        } else {
            $result = "";
        }

        return $result;
    }

    private function validatePassword():string
    {
        $password = $this->getPassword(); 
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number    = preg_match('@[0-9]@', $password);

        if (isset($password) && !empty($password)) {
            if (strlen($password) >= 8 && $uppercase && $lowercase && $number) {
                $result = $password;
            } else {
                $result = "";
            }
        } else {
            $result = "";
        }

        return $result;
    }

    private function validateAll(): bool
    {
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $btn = $this->validateBtn();
        if (isset($email) && !empty($email) && isset($password) && !empty($password) && $btn) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    private function Connection(): PDO
    {
        $con = new Config();
        return $con->Connect();
    }

    private function checkLogin():int
    {
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $data = [':email'=>$email];
        $db = $this->Connection();
        $sql = "SELECT email,password FROM users WHERE email = :email";
        $stm = $db->prepare($sql);
        if ($this->validateAll()) {
            if ($stm->execute($data)) {
                if ($stm->rowCount()) {
                    $row = $stm->fetch(PDO::FETCH_OBJ);
                    if (password_verify($password,$row->password)) {
                        $result = 0;
                    } else {
                        $result = 4;
                    }
                } else {
                    $result = 3;
                }
            } else {
                $result = 2;
            }
        } else {
            $result = 1;
        }
        return $result;
    }

   public function runLogin()
    {
        $result = $this->checkLogin();
        if ($result > 0) {
            header('Location:' . $this->routeFileError() . '?err_num=' . $result . '');
        } else {
            header('Location:' . $this->routeFile() . '');
        }
        exit();
    }
}
