<?php
$jogoId = $_POST['jogoId'];
$conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

// Verifique se o ID já existe no banco de dados
$query = "SELECT ID_jogos FROM carrinho WHERE ID_jogos = '$jogoId'";
$result = mysqli_query($conection__db, $query);

if (mysqli_num_rows($result) > 0) {
    echo "exists"; // ID já existe no banco de dados
} else {
    // O ID não existe no banco de dados, então podemos adicioná-lo à tabela carrinho
    $insertQuery = "INSERT INTO carrinho (ID_jogos) VALUES ('$jogoId')";
    if (mysqli_query($conection__db, $insertQuery)) {
        echo "added"; // ID adicionado com sucesso
    } else {
        echo "error"; // Erro ao adicionar o ID
    }
}

mysqli_close($conection__db);
?>
