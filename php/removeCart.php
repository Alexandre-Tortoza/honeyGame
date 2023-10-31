<?php
$conection__db = mysqli_connect('localhost:3308', 'root', 'admin', 'honeygame__db');

// Verifique se o ID foi passado via POST ou GET
if (isset($_POST['ID'])) {
    $ID = $_POST['ID'];

    // Use a função mysqli_real_escape_string para evitar SQL injection
    $ID = mysqli_real_escape_string($conection__db, $ID);

    $deleteQuery = "DELETE FROM carrinho WHERE ID_jogos = $ID";

    // Executa a consulta de exclusão
    if (mysqli_query($conection__db, $deleteQuery)) {
        echo "Item removido com sucesso.";
    } else {
        echo "Erro ao remover o item: " . mysqli_error($conection__db);
    }
} else {
    echo "ID não fornecido na solicitação.";
}

// Fecha a conexão com o banco de dados
mysqli_close($conection__db);
?>
