<?php
include 'Config.php';
class Registration
{
    private string $firstname;
    private string $lastname;
    private string $password;
    private string $email;
    private int $select;


    function __construct(string $firstname, string $lastname, string $password, string $email, int $select)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->password = $password;
        $this->email = $email;
        $this->select = $select;
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
    private function getSelect():string
    {
        return $this->select;
    }
    private function routeFolder(): string
    {
        return 'BIZKOD/client/login-register/';
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
        $number    = preg_match('@[0-9]@', $password);
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
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
    private function validateSelect():int{
            $select = $this->getSelect();
            if(isset($select) && !empty($select)) {
                if ($select < 0) {
                    $result = 0;
                }else{
                    $result = $select;
                }
            }
            return $result;
    }
    private function validateAll(): int
    {
        $firstname = $this->validateFirstname();
        $lastname = $this->validateLastname();
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $select = $this->validateSelect();
        $result = 0;
        if (!isset($firstname) && empty($firstname)) {
            $result = 6 ;
        }
        if (!isset($lastname) && empty($lastname)) {
            $result = 7 ;
        }
        if (!isset($email) && empty($email)) {
            $result = 8 ;
        }
        if (!isset($password) && empty($password)) {
            $result = 9 ;
        }
        if (!isset($select) && empty($select)) {
            $result = 10 ;
        }
        return $result;
    }

    private function Connection(): PDO
    {
        $con = new Config();
        return $con->Connect();
    }

    private function registerUser():int
    {
        $firstname = $this->validateFirstname();
        $lastname = $this->validateLastname();
        $email = $this->validateEmail();
        $password = $this->validatePassword();
        $select = $this->validateSelect();
        $db = $this->Connection();
        $Hashed_Password = password_hash($password,PASSWORD_DEFAULT);
        $data = [
            ':firstname'=>$firstname,
            ':lastname'=>$lastname,
            ':email'=>$email,
            ':password'=>$Hashed_Password,
            ':role'=>$select
        ];

        $used_email = "SELECT * FROM users WHERE email = :email";
        $stm = $db->prepare($used_email);
        $stm->bindValue(':email', $email);
        if($stm->execute()) {
            if($stm->rowCount()){
                $result =5;
            }else{
                if ($this->validateAll() > 0){
                    $result = $this->validateAll();
                }
                else{
                    $sql = "INSERT INTO users(f_name,l_name,email,password,role) VALUES(:firstname,:lastname,:email,:password,:role)";
                    $stm = $db->prepare($sql);
                    $stm->execute($data);
                    $result = 0;
                }
            }
        }
        return $result;
    }
    public function runRegistration(){
        $result = $this->registerUser();
        if($result > 0){
            header('Location:'.$this->routeFileError().'?err_num='.$result.'');
        }else{
            header('Location:'.$this->routeFile().'');
        }
        exit();
    }
}
$user = new Registration($_POST['f-name'], $_POST['l-name'], $_POST['password'],$_POST['email'],$_POST['department']);
$user->runRegistration();





