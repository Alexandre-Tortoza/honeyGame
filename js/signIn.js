function signIn(){

    var status
    // se a função verify() retornar TRUE, ele vai permitir que o envio dos dados para o servidor
    // caso retorne FALSE, deve informar ao usuario onde se tem erros no cadastro


    
    status = verify()
    if (status == true){
        alert("Sign In !")
        sendData()
    }else{
        alert(verify())
        sendData()
    }

    // throwError()

}


function sendData() {
    var form = document.getElementById('signInForm');
    var data =  new FormData(form);

    fetch("php/signIn.php", {
        method: 'POST',
        body: data
    });
}

function verify(){
    var name = document.getElementById('signInName').value;
    var cPF = document.getElementById('signInCPF').value;
    var email = document.getElementById('signInEmail').value;
    var password= document.getElementById('signInPassqord').value;
    var confPassword = document.getElementById('signInConfPassqord').value;

// Formatar CPF:
cPF = cPF.replace(/\./g, '')
cPF = cPF.replace(/\,/g, '')
cPF = cPF.replace(/-/g, '')

    if(name == "" || name == null){
        return "Erro no campo nome"
    }else if(cPF.length != 11){
        return "Erro no campo CPF"

    }else if(email == "" || email == null){
        return "Erro no campo Email"

    }else if(password != confPassword || password.length < 8){
        return "As senha devem ser iguas e maiores que 8 digitos"
    }
    else{
        return true
    }


}

// function throwError(){
//     var erro = `
//     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, temporibus.</span>
//     `
//     document.getElementById('signInError').innerHTML += erro;
// }

