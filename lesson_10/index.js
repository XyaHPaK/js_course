'use strict'
const myAge = 29;
if (myAge > 100) {
	console.log ("Не допустимое значение");
} else if (myAge%10 >= 5 || myAge%10 === 0) {
	console.log ("Мой возраст " + myAge + " лет");
} else if (myAge >= 11 && myAge <= 14){
	console.log ("Мой возраст " + myAge + " лет");
} else if (myAge%10 <=5 && myAge!==1 && myAge%10 !== 1) {
	console.log ("Мой возраст " + myAge + " года");
} else if (myAge === 1 || myAge%10 === 1) {
	console.log ("Мой возраст " + myAge + " год");
} 
const arr1 = [1, 10, 17,'nan', -2, -67, 123, 'uo', 70, 0, 'wtf', null,];
let min = arr1[0];
let max = min;
let sum = 0;
let n = 0;
let negative = 0;
let x = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) max = arr1[i];
    if (arr1[i] < min) min = arr1[i];
    if (typeof arr1[i] === 'number'){ sum +=arr1[i]; n++;}; 
    if (arr1[i]<0) negative++;
    if (typeof arr1[i] == 'string' || typeof arr1[i] == 'object') x++;
};
let avg = sum/n;
let a = 'not a number'
let info = { max, min , avg, negative, [a]:x };
console.log(info);
