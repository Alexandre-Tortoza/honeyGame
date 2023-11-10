<?php
$conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

// Execute a consulta para buscar os IDs do banco de dados
$query = "SELECT ID_jogos FROM carrinho";
$result = mysqli_query($conection__db, $query);

$ids = array();
while ($row = mysqli_fetch_assoc($result)) {
    $ids[] = $row['ID_jogos'];
}

// Retorne os IDs como um JSON
echo json_encode($ids);

mysqli_close($conection__db);
?>
