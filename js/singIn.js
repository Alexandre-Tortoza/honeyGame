function signIn() {

    if (verify() == true){
        var singInForm = document.getElementById('signIn');
        var singInData = new FormData(singInForm);
        fetch("../php/singIn.php", {
            method: "POST",
            body: singInData
    });
    alert("Sign In feito com Sucesso") 
    setTimeout(1000);
    window.location.href="loginPage.html";   
}



    
}




function verify() {
    var error = "";
    var nameSignIn = document.getElementById('nameSignIn').value;
    var birthDaySignIn = document.getElementById('birthDateSignIn').value;
    var emailSignIn = document.getElementById('emailSignIn').value;
    var CPFSignIn = document.getElementById('CPFSignIn').value;
    var passwordSignIn = document.getElementById('passwordSingIn').value;
    var passwordConfSignIn = document.getElementById('passwordConfSignIn').value;

    if (nameSignIn === "") {
        error = "Por favor, preencha o campo Nome.";
    } else if (birthDaySignIn === "") {
        error = "Por favor, preencha o campo Idade.";
    } else if (emailSignIn === "") {
        error = "Por favor, preencha o campo Email.";
    } else if (CPFSignIn === "") {
        error = "Por favor, preencha o campo CPF.";
    } else if (passwordSignIn === "") {
        error = "Por favor, preencha o campo Senha.";
    } else if (passwordConfSignIn === "") {
        error = "Por favor, confirme o campo Senha.";
    } else if (passwordSignIn !== passwordConfSignIn) {
        error = "Por favor, as senhas são diferentes.";
    }

    if (error === "") {
        return true;
    } else {
        alert(error);
        return false; // Retorna false para impedir o envio do formulário
    }
}
