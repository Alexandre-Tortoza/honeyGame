<?php
    $email = $_POST['loginEmail'];
    $password = $_POST['loginPassword'];

    $conection__db = mysqli_connect('localhost:3308', 'root', 'admin','honeygame__db');


    $query = "SELECT * FROM user WHERE Email = '$email' AND Password = '$password'";
    $result = mysqli_query($conection__db, $query);


    if (mysqli_num_rows($result) > 0) {
        $status = true;
        echo json_encode($status);
    } else { 
        $status = false;
        echo json_encode($status);
    }

    // Feche a conexão com o banco de dados
    mysqli_close($conection__db);
?>