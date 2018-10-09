'use strict'
// task 1
function itsMe (a){
	if (a == undefined){
		console.log("It's me XyaHPaK");
	} else{
	console.log("It's me " + a);
	return;
	}
	
}
// task 2
function compare (b , c){
	if(b > c && typeof(b) == 'number' && typeof(c) == 'number') {
		console.log(b + ' > ' +c);
	}else if (b < c && typeof b == 'number' && typeof c == 'number'){
		console.log(b + ' < ' +c);
	}else if (b === c && typeof b == 'number' && typeof c == 'number'){
		console.log(b + ' == ' +c);
	} else {
		console.log('НЕ ЧИСЛО');
	}
	return;
}
// task 3
function row (a , b , c, d){
	if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
		console.log('Введите числа');
	}
	let arr = [];
	arr.push(a);
	arr.push(b);
	arr.push(c);
	arr.sort();
	if (d == '<'){
		console.log(arr[0] + ' < ' + arr[1] + ' < ' + arr[2]);
	} else if (d == '>'){
		console.log(arr[2] + ' > ' + arr[1] + ' > ' + arr[0]);
	}
	return;
}
// task 4
function fact(n){
	return (n != 1) ? n * fact( n-1 ) : 1;
}
// task 5
function matrixDiff (arr1,arr2){
	let absDiff = 0;
	for(let i = 0; i < arr1.length; i++){
		for (let j = 0; j < arr1[i].length; j++){
			if (arr1[i].length == arr2[i].length && arr1[i][j].length == arr2[i][j].length){
				absDiff = absDiff + Math.abs(arr1[i][j] - arr2[i][j]);
			} else {
				return console.log(NaN);
			}
		}
	}		
	return console.log(absDiff);
}

