var cart = [];

function cardAdd(index){

    if(cart.includes(index)){
        alert("Produto já adicionado ao carrinho!")
        
    }else{
        cart.push(index);
        alert(cart);
        console.log(cart)
        }
    console.log(cart)
};

function cartShow(){
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
    } else{
        
    }


}