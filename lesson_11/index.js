'use strict'
let obj = {a : 1 , b : [] , c: ''};
let arr = ['a', 'c'];
function	removeKeys1 (obj, arr) {
	for (let key in obj) {
		for (let i in arr){
			if (key == arr[i]){
				delete obj[key];
			};
		};
	};
};
removeKeys1(obj, arr);
//
let obj1 = {a : 1 , b : [] , c: '',d : 2, f: 23};
let arr1 = ['a', 'c','d'];
function find1(arr, key){
	let found = false;
	for (let i in arr){
		if (key == arr[i]){
			found = true;
			break;
		}
	}
	return found;
}
function	removeKeys2 (obj1, arr1) {
	let  obj2 = {}, found = false;
	for (let key in obj1) {
		if (!find1(arr1 , key)){
			obj2[key]=obj1[key];
		}
	}
	return obj2;
};
removeKeys2(obj1, arr1);
// 
const a = -10;
const b = 7;
function absDiff (a){
	return 	function (b){
		return	Math.abs(a-b);
	};
};
absDiff(a)(b);
