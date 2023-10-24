async function login(){
    var form = document.getElementById('loginForm');
    var data =  new FormData(form);

    var promise = await fetch("../php/login.php", {
        method: 'POST',
        body: data
    });

    var resposta = await promise.json();
    if(resposta == true){
        alert("Feito login com sucesso")
        window.location.href = 'private.html';
    }
}
