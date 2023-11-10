<?php
    $name = $_POST["name"];
    $cPF = $_POST['CPF'];
    $email = $_POST['mail'];
    $password = $_POST['password'];
    $confPassword = $_POST['confPassword'];

    $conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

    $query = "INSERT INTO user (name, CPF, Email, Password) VALUES ('$name', '$cPF', '$email','$password')";

    mysqli_query($conection__db,$query);
?>