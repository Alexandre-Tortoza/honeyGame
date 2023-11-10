function upload() {
    var arquivo = document.getElementById('arquivo').files[0];
    var dados = new FormData();
    var form =document.getElementById('formulario__Adm');
    var dados = new FormData(form);
    dados.append('arquivo', arquivo);

    fetch('../php/admin.php', {
        method: 'POST',
        body: dados
    })
    .then(response => response.json())
    .then(data => {
        // Exibir a mensagem na página HTML
        document.getElementById('mensagem').textContent = data.mensagem;
    })
    .catch(error => console.error(error));
}

async function deletar(){
    
    var nome_id = document.getElementById("id").value;
    var dados = new FormData();
    dados.append('id', nome_id);

    var apagar = await fetch('../php/apagar.php', {
        method: 'POST',
        body: dados
    });

}