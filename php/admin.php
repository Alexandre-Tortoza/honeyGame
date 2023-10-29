<?php 

    $nome=$_POST['nome'];
    $preco=$_POST['preco'];
    $descricao=$_POST['genero'];
    $arquivo = $_FILES["arquivo"];
    $mensagem = "é necessario que o arquivo seja um png";


    if($arquivo["type"] == "image/png")
    {
        $novo_endereco = "../images/" . $nome .".png";
        $mensagem= "arquivo enviado";
        
        move_uploaded_file($arquivo["tmp_name"], $novo_endereco);
        $conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123','honeygame__db');
        $receber = mysqli_query($conection__db, "SELECT ID_jogos FROM jogo");
        $query = "INSERT INTO jogo (nome, preco, descricao) VALUES ('$nome','$preco','$descricao')";
        mysqli_query($conection__db, $query);

    }
    else{
        $mensagem= "o arquivo deve obrigatoriamente um png";
    }
    echo json_encode(["mensagem" => $mensagem]);
  
?>  
