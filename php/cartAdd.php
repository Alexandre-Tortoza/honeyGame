<?php
$conection__db = mysqli_connect('localhost:3306', 'root', 'C0x1nh4123', 'honeygame__db');

if (isset($_POST['index'])) {
    $index = $_POST['index'];

    // Check if the value of 'index' exists in the database
    $query = "SELECT * FROM carrinho WHERE ID_jogos = $index";
    $result = mysqli_query($conection__db, $query);

    if (mysqli_num_rows($result) == 0) {
        // If not, add the value of 'index' to the database
        $insertQuery = "INSERT INTO carrinho (ID_jogos) VALUES ($index)";
        if (mysqli_query($conection__db, $insertQuery)) {
            echo "added";
        } else {
            echo "error";
        }
    } else {
        echo "exists";
    }
} else {
    echo "invalid";
}
?>
