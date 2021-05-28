<?php
include_once 'Config.php';

class Data {
    public function write(){
        echo "const tableData = {".'<br>';
        $this->team();
        echo "}".'<br>';
    }



    private function team(){

        $conn = new Config();
        $db = $conn->Connect();

        $sql = "SELECT * FROM this_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){
                echo 'poslovni: {'.'<br>';
                echo 'current_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 1) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }
        echo '],<br>';
        $sql = "SELECT * FROM next_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){

                echo 'next_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 1) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }

        echo '],<br>';
        echo '},<br>';


        $sql = "SELECT * FROM this_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){
                echo 'polovni_automobili: {'.'<br>';
                echo 'current_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 2) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }
        echo '],<br>';
        $sql = "SELECT * FROM next_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){

                echo 'next_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 2) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }


        echo '],<br>';
        echo '},<br>';

        $sql = "SELECT * FROM this_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){
                echo 'fourzida: {'.'<br>';
                echo 'current_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 3) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }
        echo '],<br>';
        $sql = "SELECT * FROM next_week";
        $stm = $db->prepare($sql);
        if($stm->execute()){
            if($stm->rowCount()){

                echo 'next_week: ['.'<br>';
                while($row = $stm->fetch(PDO::FETCH_OBJ)) {
                    if ($row->role == 3) {
                        echo '[' . $row->f_name . "," . $row->monday . "," . $row->tuesday . "," . $row->wednesday . "," . $row->thursday . "," . $row->friday . "," . $row->saturday . "," . $row->sunday . "],<br>";
                    }
                }
            }
        }


        echo '],<br>';
        echo '},<br>';




    }


    private function Connection(): PDO
    {
        $con = new Config();
        return $con->Connect();
    }
}

$data = new Data();
$data ->write();