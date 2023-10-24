<?php
    $nome = $_POST["nome"];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $conection__db = mysqli_connect('localhost:3308', 'root', 'admin','honeygame__db');

    $query = "INSERT INTO entrada (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

    mysqli_query($conection__db,$query);
?>