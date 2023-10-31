
window.onload = async function() {
    

    var promise = await fetch("php/cardRequest.php",{
        method: "GET"
    })
    

    jogo = await promise.json();
    
        for (var i = 0; i < jogo.length; i++) {
            if (jogo[i].preco == "00"){
                jogo[i].preco = "Free to play"
                var moeda = ""
            }else if(jogo[i].preco == null){
                jogo[i].preco = "upcoming"
                var moeda = ""
                var bnt = `<button id='alert'>Lembrete<img src="images/alert.svg" alt=""></button>`
            }
            else{
                var moeda ="R$"
                var bnt = `<button onclick="cartAdd(${jogo[i].ID_jogos})">Adicionar ao Carrinho <img src="images/shopping_cart.svg" alt=""></button>`
            }jogo
            var conteudo = 
            `  
            <div class="card">
                <img src="images/${jogo[i].img}" alt=""> 
                <div>
                    <h5>${jogo[i].nome}</h5>
                    <span> ${moeda} ${jogo[i].preco}</span>
                    ${bnt}
                </div>
            </div>
            `;
            document.getElementById('cards').innerHTML += conteudo;
        }
};

// ------------------------------------------------

function menuShow(){
    var menu = `
        <div class="mobileMenu__menu">
            <img width="25px" src="images/close.svg" alt="close Menu" onclick="menuClose()">
            <div>
                <img width="40px" onclick="cartShow()" id="cartIcon" src="images/cart.svg"  alt="carrinho de compra">                        </div>
                <a href="pages/loginPage.html">Login</a>                        </div>
        <div id="popUpBG"></div>
    `
    document.getElementById('menuContainer').innerHTML +=menu
}
function menuClose(){

    document.getElementById('menuContainer').innerHTML =""
}