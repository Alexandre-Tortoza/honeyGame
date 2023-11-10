<?php
$nome = $_POST['nome'];
$preco = $_POST['preco'];
$descricao = $_POST['genero'];
$arquivo = $_FILES["arquivo"];
$mensagem = "É necessário que o arquivo seja um PNG";

if ($arquivo["type"] == "image/png") {
    $novo_endereco = "../images/" . $nome . ".png";
    $mensagem = "Arquivo enviado";

    move_uploaded_file($arquivo["tmp_name"], $novo_endereco);
    $conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

 
    $query = "INSERT INTO jogo (nome, preco, descricao) VALUES ('$nome','$preco','$descricao')";
    mysqli_query($conection__db, $query);


    $ultimo_id_inserido = mysqli_insert_id($conection__db);

    // Renomear o arquivo com o ID do jogo  
    $novo_nome_arquivo = $ultimo_id_inserido . ".png";
    $novo_endereco_com_id = "../images/" . $novo_nome_arquivo;
    rename($novo_endereco, $novo_endereco_com_id);
    $update_query = "UPDATE jogo SET img = '$novo_nome_arquivo' WHERE ID_jogos = $ultimo_id_inserido";
    mysqli_query($conection__db, $update_query);
} else {
    $mensagem = "O arquivo deve obrigatoriamente ser um PNG";
}

echo json_encode(["mensagem" => $mensagem]);
?>
