import CardData from '/card_data.js';
import MaskInput from 'mask-input';
const name = document.getElementById('name');
let getInfoBtn = document.getElementById('getInfo');
const cardNumber = document.getElementsByClassName('js-input-selector')[0];
 
const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
  onChange() {
    if (cardNumber.value.match(/^(\d{4}-){3}\d{4}/)) {
        cardNumber.style.borderColor = "green";
        getInfoBtn.disabled = 'false'
    } else {
        cardNumber.style.borderColor = "red";
        getInfoBtn.disabled = 'true'
    }
}  
});

name.addEventListener('input', function(){
    if (name.value.length >= 2 && isNaN(name.value)){
        name.style.borderColor = 'green'
    } else {
        name.style.borderColor = 'red'
    }
})
getInfoBtn.addEventListener('click', function(){
    fetch (`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${cardNumber.value}`)
    .then (res =>res.json())
    .then(res =>{
        for (let i=0; i<res.length; i+=1){
            if(res[i].value = ""){
                res[i].value = Unknown;
            }
            let key = document.getElementsByClassName('cell1')[i];
            let value = document.getElementsByClassName('cell2')[i];
            key.innerText = res[i];
            value.innerText = res[i].value;
        }
    })
})
