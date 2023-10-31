var cart=[];


var jogo;
if (jogo == null){
    async function gamesDb() {
        var promise = await fetch("php/cardRequest.php",{
            method: "GET"
        })
        jogo = await promise.json();
    
    };
    gamesDb()
}

function cartAdd(index) {
    // Verifica se o índice já está no carrinho no lado do cliente
    if (cart.includes(index)) {
        alertPopUp(1);
    } else {
        // Se não estiver no carrinho, envie uma solicitação ao servidor PHP para verificar no banco de dados
        checkIfIdExistsInDatabase(index);
    }
}

function cartRemove(ID) {
    // Envia uma solicitação AJAX para o servidor PHP para remover o ID do banco de dados
    removeIdFromDatabase(ID);
}

function removeIdFromDatabase(ID) {
    // Crie uma instância XMLHttpRequest para enviar a solicitação
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/remove_id.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // Define a função de callback para lidar com a resposta do servidor
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            if (response === "success") {
                // A remoção no banco de dados foi bem-sucedida, agora você pode remover o ID do array cart
                removeIdFromArray(ID);
            }
        }
    };
    
    // Envie o ID para o servidor para remoção
    xhr.send("jogoId=" + ID);
}

function removeIdFromArray(ID) {
    // Encontre o índice do ID no array cart e remova-o
    var index = cart.indexOf(ID);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    // Agora você pode chamar outras funções, como atualizar a exibição do carrinho
    console.log("Drop", ID);
    console.log(cart);
    popUpClose();
    cartShow();
}


function cartShow(){
    document.getElementById('menuContainer').innerHTML =""
    if(cart == ""){
        alertPopUp(0)
    }else{
        var cartcontent = `
        <div id="popUp__all">
            <div id="popUp">
            
                <div class="popUp__top">
                    <h4>Meu Carrinho</h4>
                    <div id="closeBTN"><img onclick="popUpClose()" src="images/close.svg" alt=""></div>
                </div>
            
                <div class="popUp__Check">
                    <div id='popUp__resume'>
                        <div>
                        <span>Itens adicionados: </span>
                        <span>${cart.length}</span>
                        </div>
                        <div>
                            <span>Valor estimado:</span>
                            <span id='totalPrice'>R$ </span>
                        </div>
                    </div>
                    <div>
                    <button onclick="cartSend()">Finalizar Compra!</button>
                    </div>
                </div>
                <div id='check__itensAdded'>
                <span>Itens Adicionados</span>
                    <div class="hLine"></div>
                </div>



                <div id="popUp__List" class="popUp__List">
            </div>
        </div>

        <div id="popUpBG"></div>
        </div>
        `
        document.body.innerHTML += cartcontent;
        function addIntensCart(){
            totalPrice = 0
            for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < jogo.length; j++) {

                    if(cart[i] == jogo[j].ID_jogos){

                        var totalPrice = totalPrice + parseFloat(jogo[j].preco);




                        var cartIten = `
                            <div class="popUp__iten">
                                <div id='popUp__img' ><img src="images/${jogo[j].img}" alt=""></div>
                                <div>${jogo[j].nome}</div>
                                <div>${jogo[j].preco}</div>
                                <img onclick="cartRemove(${jogo[j].ID_jogos})" src="images/close-RED.svg" alt="">                            </div>
                        `
                        document.getElementById('popUp__List').innerHTML += cartIten;
                    }
                    
                }
                
            }
            document.getElementById('totalPrice').innerHTML = totalPrice.toFixed(2);
        }
        addIntensCart()








    }

};

function cartSend(){
    var cart =[]
    var jogoId = cart;
    var data = new FormData();

    fetch("php/cart/sendCartDB.php", {
        method: 'POST',
        body: data
    });
    window.location.href = './pages/cart.html';
};
function popUpClose() {
    var remove = document.getElementById("popUp__all");
    remove.parentNode.removeChild(remove);
};

function alertPopUp(type) {
// Type 0 == Error
// type 1 == product already added to cart
// type 2 == product added to cart


    if (type == 0){
        
        var alertPopUp = `
        
        <div id="alertBox" class="alertBox" style="background-color: var(--red);">
            <span>Seu carrinho esta vazio!</span>
        </div>
        
        `
        document.body.innerHTML += alertPopUp;
        setTimeout(function () {
            var remove = document.getElementById("alertBox");

//  Efeito de Fade na Opacidade da DIV:

        // let opacidade = 0;
        // const alvoOpacidade = 1;
        // const incremento = 0.01; 
        // while (opacidade <= alvoOpacidade){
        //     opacidade += incremento;
        //     remove.style.opacity = opacidade;
        // };
        remove.parentNode.removeChild(remove);
        }, 3000);
    }else if(type == 1 ){
        
        var alertPopUp = `
        
        <div id="alertBox" class="alertBox" style="background-color: var(--red);">
            <span>Este jogo já está em seu carrinho</span>
        </div>
        
        `
        document.body.innerHTML += alertPopUp;
        setTimeout(function () {
            var remove = document.getElementById("alertBox");

//  Efeito de Fade na Opacidade da DIV:

        // let opacidade = 0;
        // const alvoOpacidade = 1;
        // const incremento = 0.01; 
        // while (opacidade <= alvoOpacidade){
        //     opacidade += incremento;
        //     remove.style.opacity = opacidade;
        // };
        remove.parentNode.removeChild(remove);
        }, 3000);
    }
    else if(type == 2 ){
        
        var alertPopUp = `
        
        <div id="alertBox" class="alertBox" style="background-color: var(--green);">
            <span>Jogo adicionado ao carrinho</span>
        </div>
        
        `
        document.body.innerHTML += alertPopUp;
        setTimeout(function () {
            var remove = document.getElementById("alertBox");

//  Efeito de Fade na Opacidade da DIV:

        // let opacidade = 0;
        // const alvoOpacidade = 1;
        // const incremento = 0.01; 
        // while (opacidade <= alvoOpacidade){
        //     opacidade += incremento;
        //     remove.style.opacity = opacidade;
        // };
        remove.parentNode.removeChild(remove);
        }, 3000);
    }
};







function checkIfIdExistsInDatabase(index) {
    // Envia uma solicitação AJAX para o servidor PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/check_id.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // Define a função de callback para lidar com a resposta do servidor
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            if (response === "exists") {
                alertPopUp(1); // O ID já existe no banco de dados
            } else if (response === "not_exists") {
                // O ID não existe no banco de dados, então podemos adicioná-lo ao carrinho
                cart.push(index);
                alertPopUp(2);
            }
        }
    };
    
    // Envie o ID para o servidor para verificação
    xhr.send("jogoId=" + index);
}