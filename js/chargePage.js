
cart=[]
total = 0;
window.onload = async function() {

function loadCartData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/loadCartData.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var responseData = JSON.parse(xhr.responseText);
            cart = responseData;
            console.log("Cart data loaded:", cart);
        }
    };

    xhr.send();
}
loadCartData()


console.log(cart)


    var promise = await fetch("../php/cardRequest.php",{
        method: "GET"
    })
    jogo = await promise.json();

    function cartLoad(){
        for (var i = 0; i < jogo.length; i++) {
        
            var conteudo =`
                <div class="products__item">
                    <img src="../images/${jogo[i].img}" alt="Jogo Capa" width="150px">
                    <div>
                        <span> ${jogo[i].nome} </span>
                        <span>R$ ${jogo[i].preco} </span>
                    </div>
                    <img src="../images/close.svg" alt="" onclick="cartRemove(${jogo[i].ID_jogos})">
                </div>
                <div class="hLine"></div>
                <br>
        `;
    
        if(cart.includes(jogo[i].ID_jogos)){
            total = total + parseFloat(jogo[i].preco)
            document.getElementById('products').innerHTML += conteudo;
            document.getElementById('totalCharge').innerHTML = total.toFixed(2);
        }
    
    
        
        }
    }
cartLoad()



console.log(cart)

}




function cartRemove(ID) {
    for (var index = cart.length; index >= 0; index--) {
        if (ID == cart[index]) {
        console.log("Drop", cart[index]);
        cart.splice(index, 1);
        cartRemoveDB(ID)
        }
    }
    if(cart == ""){
        window.location.href = '../index.html';
        verificarElementoVazio()
        document.getElementById('products').innerHTML = "";
        cartLoad()
        window.location.reload()
        alert("a")
        // setTimeout(100,window.location.reload())
    }

    
}
function cartRemoveDB(ID) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/removeCart.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        }
    };
    var data = "ID=" + ID;
    xhr.send(data);

}





function verificarElementoVazio() {
    var elemento = document.getElementById("products");
    if (elemento.innerHTML.trim() === "") {
        window.location.href = "../index.html";
    }
}