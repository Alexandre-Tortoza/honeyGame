<?php
    $jogoId = $_POST['jogoId'];
        $conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

        $query = "INSERT INTO carrinho (ID_jogos) VALUES ('$jogoId')";
        mysqli_query($conection__db, $query);
?>