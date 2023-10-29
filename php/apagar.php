<?php

    $id = $_POST['id'];

    $conexao = mysqli_connect("localhost:3306", "root", "C0x1nh4123", "honeygame__db");

    $result = mysqli_query($conexao, "SELECT * FROM jogo");

    $query = "DELETE FROM jogo WHERE ID_jogos='$id'";

    mysqli_query($conexao, $query);

?>