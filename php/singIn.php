<?PHP

    $name = $_POST ['nameSignIn'];
    $bDay = $_POST ['birthDaySignIn'];

    $email = $_POST['emailSignIn'];
    $CPF = $_POST['CPFSignIn'];
    
    $password = $_POST['passwordSingIn'];

    $conection__DB = mysqli_connect('localhost:3306', 'root', 'admin','honeygame__db');


    $query = "INSERT INTO usuarios (nome, cpf, email, senha, data_de_nascimento) VALUES ('$name', '$CPF', '$email', '$password', '$bDay')";    mysqli_query($conection__DB, $query);

?>



