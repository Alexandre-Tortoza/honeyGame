<?php
    $jogoId = $_POST['jogoId'];
    $conection__db = mysqli_connect('localhost:3308', 'root', 'admin', 'honeygame__db');

        $query = "INSERT INTO carrinho (ID_jogos) VALUES ('$jogoId')";
        mysqli_query($conection__db, $query);
?>