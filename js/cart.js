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

function cartAdd(index){
    if(cart.includes(index)){
        alertPopUp(1) 
    }else{
        cart.push(index);
        // DEV
        // alert("ID dos intens Adicionados:\n" + cart);
        // console.log("ID dos intens Adicionados:\n" + cart)
        // 
        alertPopUp(2) 
    
    }
};

function cartRemove(ID){
    for (let index = 0; index < cart.length; index++) {


        // DEV
        console.log("--------")
        console.log(cart)
        console.log("--------")
        console.log(ID)
        console.log(cart[index])
        console.log("--------")
        // 

        if(ID == cart[index]){
            console.log("Drop", cart[index])
            cart.splice(index, 1)
            console.log(cart)
            popUpClose()
            cartShow()
        }
    }
};


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


























function cartSend(){
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