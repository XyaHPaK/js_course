'use strict'
//
function add (emoji){
	let sum = 0;
	if (emoji == undefined){
		return emoji = `💖 ️ 🇺🇦`;
	} else {
		for (let i = 0; i<emoji.length; i++){
			sum+=emoji.charCodeAt(i);
		}
	}
	return  sum/(emoji.length/2);
}
add ('🍔😁');
// 
function clearNumbers (arr) {
	for (let i in arr){
			arr[i] = arr[i].filter(function (prop){
				return typeof prop == 'number';
			})
		} 
	return arr;

}
clearNumbers([[1, 'm' , 3, undefined], [4, null, {}, 'asd'], [5, 'asd'], [6]]);
//
function reverse (){
	let arr1 = [];
	for (let i in arguments){
		arr1.push (arguments[i].split('').reverse().join(''));
	}
	return arr1;
		
}
reverse ('123', '456', 'KapHayX');
//
function splitArray (arr, n){
	let arr2 = [];
	for (let i in arr){
		if (typeof arr2[parseInt(i/n)] == 'undefined'){
			arr2[parseInt(i/n)] = [];
		}
		arr2[parseInt(i/n)].push(arr[i]);
	}
	return arr2;
}
splitArray([1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,0,1,2,3,5,7,8,1],3);