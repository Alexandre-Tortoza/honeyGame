cart=[]

function loadCartData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/loadCartData.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var responseData = JSON.parse(xhr.responseText);
            cart = responseData;
            console.log("Cart data loaded:", cart);
        }
    };

    xhr.send();
}

loadCartData();

// ----------------------------------------------------------
//  PopUp Cart


function cartShow(){

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

function cartAdd(index) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/cartAdd.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            if (response === "added") {
                cart.push(index)
                console.log(cart)
                alertPopUp(2)
            } else if(response === "exists") {
                alertPopUp(1)
            }
        }
    };

    // Prepare the data to send
    var data = "index=" + index;

    xhr.send(data);
}


function cartRemove(ID) {
    console.log("remove Bnt action")
    console.log(cart)


    for (var index = cart.length; index >= 0; index--) {

        if (ID == cart[index]) {
        console.log("Drop", cart[index]);
        cart.splice(index, 1);
        cartRemoveDB(ID)



        }
    }

    popUpClose();
    cartShow();
}

function cartRemoveDB(ID) {
    // Crie uma instância do objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configure a solicitação para enviar para o arquivo PHP que lidará com a remoção
    xhr.open("POST", "php/removeCart.php", true);

    // Defina o cabeçalho da solicitação para enviar dados no formato x-www-form-urlencoded
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Defina a função de retorno de chamada para tratar a resposta do servidor
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        // Aqui você pode tratar a resposta do servidor, se necessário
        console.log(xhr.responseText);
        }
    };

    // Crie os dados a serem enviados, no formato apropriado (neste exemplo, usando JSON)
    var data = "ID=" + ID;

    // Envie a solicitação
    xhr.send(data);
}



function popUpClose() {
    var remove = document.getElementById("popUp__all");
    remove.parentNode.removeChild(remove);
};

function cartSend(){function cartSend(){
    window.location.href = './pages/cart.html';
};
function popUpClose() {
    var remove = document.getElementById("popUp__all");
    remove.parentNode.removeChild(remove);
};

    window.location.href = './pages/cart.html';
};
function popUpClose() {
    var remove = document.getElementById("popUp__all");
    remove.parentNode.removeChild(remove);
};

// -----------------------------------------
// PopUp
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

        remove.parentNode.removeChild(remove);
        }, 3000);
    }
};