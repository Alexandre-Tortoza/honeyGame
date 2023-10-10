// var jogo = [
//     {nome:"The Witcher III", preco:"129.99",img:"images/the_witcher_3.png"},
//     {nome:"Twitter", preco:"159.00",img:"images/the_witcher_3.png"},
//     {nome:"Twitter", preco:"159.00",img:"images/the_witcher_3.png"},
    
// ];



// document.addEventListener('DOMContentLoaded', function() {
//     alert("Ready!");
// }, false);

fetch("php/cardRequest.php", {
    method: "GET"
})
.then(response => response.json())
.then(jogo => {
    for (var i = 0; i < jogo.length; i++) {
        if (jogo[i].preco == "00"){
            jogo[i].preco = "Free to play"
            var moeda = ""
        }else if(jogo[i].preco == null){
            jogo[i].preco = "To be announced"
            var moeda = ""
        }
        else{
            var moeda ="R$"
        }
        var conteudo = 
        `  
        <div class="card">
            <img src="images/${jogo[i].img}" alt="">
            <div>
                <h5>${jogo[i].nome}</h5>
                <span> ${moeda} ${jogo[i].preco}</span>
                <button>Adicionar ao Carrinho <img src="images/shopping_cart.svg" alt=""></button>
            </div>
        </div>
        `;
        document.getElementById('cards').innerHTML += conteudo;
    }
})




// async function cards(){

//     var promise = await fetch("php/listar.php",{
//         method: "GET"
//     });

//     var resultado = await promise.json();

//     alert(resultado[0].email);

// }