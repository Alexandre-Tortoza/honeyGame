const cardNumber_T = document.getElementById('cardNumber_T');
const cardNumber = document.getElementById('cardNumber');




const cardCVV_T = document.getElementById('cardCVV_T')
const cardCVV = document.getElementById('cardCVV')

const cardValidity_T = document.getElementById('cardValidity_T')
const cardValidity = document.getElementById('cardValidity')


const cardCardholder_T = document.getElementById('cardCardholder_T')
const cardCardholder = document.getElementById('cardCardholder')

const cardType_T = document.getElementById('cardType_T')
const cardType = document.getElementById('cardType')

const cardFlag_T = document.getElementById('cardFlag_T')
const cardFlag = document.getElementById('cardFlag')









const cNumber = function(e) {
    // cardNumber_T.value = cardNumber_T.value.replace(/(\d{4})/g, '$1 ');
    if(cardNumber_T.value == ""){
        cardNumber.innerText = "**** **** **** ****"
    }else{
        cardNumber.innerText = cardNumber_T.value;
    }
}

const cCVV = function(e) {
    if(cardCVV_T.value ==""){
        cardCVV.innerText = "CVV"
    }else{
        cardCVV.innerText = cardCVV_T.value
    }
}

const cValidity = function(e) {
    if(cardValidity_T.value ==""){
        cardValidity.innerText = "Validade"
    }else{
        cardValidity.innerText = cardValidity_T.value
    }
}

const cCardholder = function(e) {
    if(cardCardholder_T.value ==""){
        cardValidity.innerText = "Titular"
    }else{
        cardCardholder.innerText = cardCardholder_T.value
    }
}

const cType = function(e) {
    if(cardType_T.value ==""){
        cardType.innerText = "Forma de pagamento"
    }else{
        cardType.innerText = cardType_T.value
    }
}

const cFlag = function(e) {
    // if(cardFlag_T.value == "0"){
    //     cardFlag.innerHTML = `
    //         <img src="../images/mc_symbol.svg" alt=""></img>
    //     `;
    // }
    
}
cardNumber_T.addEventListener('input', cNumber);
cardCVV_T.addEventListener('input', cCVV);
cardValidity_T.addEventListener('input', cValidity);
cardCardholder_T.addEventListener('input', cCardholder);
cardType_T.addEventListener('input', cType);
cardFlag_T.addEventListener('input', cFlag);
