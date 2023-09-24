<?PHP

    $email = $_POST['username'];
    $password = $_POST['password'];

    $conection__DB = mysqli_connect('localhost:3306', 'root', 'admin','honeygame__db');

    $resultado = mysqli_query($conection__DB_pucPR, "SELECT * FROM estudante");
    
    $dados = array();

    while( $registro = mysqli_fetch_assoc($resultado) ){
        array_push($dados, $registro);
    };

    $json = json_encode($dados);
    echo $json;

    ?>
?>

