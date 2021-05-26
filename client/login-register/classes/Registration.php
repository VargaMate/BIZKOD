<?php
include 'db_config.php';
class Registration
{
    private string $firstname;
    private string $lastname;
    private string $password;
    private string $email;
    private string $btn;


    function __construct(string $firstname, string $lastname, string $password, string $email, string $btn)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->password = $password;
        $this->email = $email;
        $this->btn = $btn;
    }

    private function getFirstname(): string
    {
        return $this->firstname;
    }

    private function getLastname(): string
    {
        return $this->lastname;
    }

    private function getPassword(): string
    {
        return $this->password;
    }

    private function getEmail(): string
    {
        return $this->email;
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
        return 'registered.php';
    }

    private function routeFileError(): string
    {
        return $this->routeFolder() . 'login-register.php';
    }

    private function validateFirstname(): string
    {
        $firstname = $this->getFirstname();
        if (isset($firstname) && !empty($firstname)) {
            $result = $firstname;
        } else {
            $result = "";
        }
        return $result;
    }

    private function validateLastname(): string
    {
        $lastname = $this->getLastname();
        if (isset($lastname) && !empty($lastname)) {
            $result = $lastname;
        } else {
            $result = "";
        }
        return $result;
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

    private function validatePassword(): string
    {
        $password = $this->getPassword();
        if (isset($password) && !empty($password)) {
            if (strlen($password) >= 8) {
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
        $firstname = $this->validateFirstname();
        $lastname = $this->validateLastname();
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $btn = $this->validateBtn();
        if (isset($firstname) && !empty($firstname) && isset($lastname) && !empty($lastname) && isset($email) && !empty($email) && isset($password) && !empty($password) && $btn) {
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

    private function registerUser()
    {
        $firstname = $this->validateFirstname();
        $lastname = $this->validateLastname();
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $db = $this->Connection();

        $Hashed_Password = password_hash($password,PASSWORD_DEFAULT);

        $data = [
            ':firstname'=>$firstname,
            ':lastname'=>$lastname,
            ':email'=>$email,
            ':password'=>$Hashed_Password
        ];
        $used_email = "SELECT * FROM users WHERE email = '$email'";
        if($result = $db->query($used_email)) {
            if($check = $result->rowCount()){
                $result = 5;
            }
        }

        if ($this->validateAll()) {

        $sql = "INSERT INTO users(firstname,lastname,email,password) VALUES(:firstname,:lastname,:email,:password)";
        $stm = $db->prepare($sql);
        $stm->execute($data);
        $result = 0;
        }
        return $result;
    }
    public function runRegistration(){
        $result = $this->registerUser();
        if($result>0){
            header('Location:'.$this->routeFileError().'?err_num='.$result.'');
            exit();
        }else{
            header('Location:'.$this->routeFile().'');
            exit();
        }
    }
}





