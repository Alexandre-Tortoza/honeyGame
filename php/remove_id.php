<?php
$jogoId = $_POST['jogoId'];
$conection__db = mysqli_connect('localhost:3308', 'root', 'admin', 'honeygame__db');

// Execute a consulta para remover o ID do banco de dados
$query = "DELETE FROM carrinho WHERE ID_jogos = '$jogoId'";
if (mysqli_query($conection__db, $query)) {
    echo "success"; // A remoção no banco de dados foi bem-sucedida
} else {
    echo "error"; // Erro ao remover o ID
}

mysqli_close($conection__db);
?>
