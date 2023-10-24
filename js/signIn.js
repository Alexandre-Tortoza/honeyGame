function signIn(){

    var status
    // se a função verify() retornar TRUE, ele vai permitir que o envio dos dados para o servidor
    // caso retorne FALSE, deve informar ao usuario onde se tem erros no cadastro


    alert("Sign In !")

    verify()
    

}


function gravar() {
    var form = document.getElementById('signInForm');
    var dados =  new FormData(form);

    fetch("php/signIn.php", {
        method: 'POST',
        body: dados
    });
}

function verify(){
    var name = document.getElementById('signInName').value;
    var cPF = document.getElementById('signInCPF').value;
    var email = document.getElementById('signInEmail').value;
    var password= document.getElementById('signInPassqord').value;
    var confPassword = document.getElementById('signInConfPassqord').value;

    console.log(name)
    console.log(cPF)
    console.log(email)
    console.log(password)
    console.log(confPassword)
}