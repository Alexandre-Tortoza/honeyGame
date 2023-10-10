<?php
    $conection__db = mysqli_connect('localhost:3308', 'root', 'admin','honeygame__db');
    $resultado = mysqli_query($conection__db, "SELECT * FROM jogo");
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;



?>