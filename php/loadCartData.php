<?php
$conection__db = mysqli_connect('localhost:3308', 'root', 'admin', 'honeygame__db');
$resultado = mysqli_query($conection__db, "SELECT ID_jogos FROM carrinho");

$cart = array();
while ($row = mysqli_fetch_assoc($resultado)) {
    $cart[] = $row['ID_jogos'];
}

header('Content-Type: application/json');
echo json_encode($cart);
?>
