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
        alert("Produto já adicionado ao carrinho!")
        
    }else{

        cart.push(index);
        // alert(cart);
        // console.log(cart)
        
    
    }
};

function cartRemove(ID){
    for (let index = 0; index < cart.length; index++) {
        console.log("--------")
        console.log(cart)
        console.log("--------")
        console.log(ID)
        console.log(cart[index])
        console.log("--------")
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
        // alert("Carrinho vazio!")
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
                        <button>Finalizar Compra!</button>
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



























function popUpClose() {
    // alert("Close popUp!")
    var remove = document.getElementById("popUp__all");
    remove.parentNode.removeChild(remove);
};