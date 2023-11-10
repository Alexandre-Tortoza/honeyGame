<?php
    $conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');
    $resultado = mysqli_query($conection__db, "SELECT * FROM jogo");
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;



?>