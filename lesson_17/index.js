const mess = document.createElement('span');
document.body.append(mess);
mess.innerText = 'Выберите дату '
const field = document.createElement('input');
field.type = 'date';
document.body.append(field);
let present = new Date();
let dd = present.getDate();
let mm = present.getMonth() + 1;
let yy = present.getFullYear();
fv = yy + '-' + mm + '-' + dd;
field.value = fv;
let sp = document.createElement('span');
document.body.append(sp);
sp.innerText = ' осталось -- дней';
field.addEventListener('input',toDate);


function toDate (){
    let date = new Date(field.value);
    let now = new Date();
    let range = date - now;
    if(range < 0){
        return sp.innerText = 'выберите дату после текущего дня';
    }else{
        return sp.innerText = ' осталось ' + range/1000/60/60/24 + ' дней';
    }
}
