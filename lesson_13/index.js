'use strict'
let func = false;
let args = [];
let message ='';
let ex  = false;
let v = {
	'1':'y = kx + b',
	'2':'y = x^2'
};
let messages = {
    '1': ['k','x','b'],
    '2': ['x']
};
let f = {
    '1' : () => parseInt(args[0]) * parseInt(args[1]) + parseInt(args[2]),
    '2' : () => parseInt(args[0]) * parseInt(args[0]),
} 
let result = {history:[], formula:'', args:{}};
function calculate (){
	do {
	    if (!func) {
	        message  = "choose a formula to calculate:\n'1' -> y = kx + b;\n'2' -> y = x^2";
	    } else if (args.length < messages[func].length) {
	        message = 'enter ' + messages[func][args.length];
	    }
	    let value = prompt(message);
	    if (value == null){
	    	value = 'exit';
	    }
	    result.history.push(value);
	    if (value == 'exit') {
	        ex = true;
	    } else if (!func) {
	        if ((value == 1) || (value == 2)) {
	            func = value;
	        }
	    } else {
	    	if (!isNaN(value)){
		        args.push(value);
		        if (args.length == messages[func].length) {
		            alert(f[func]());
		            result.formula = v[func];
		            result.args = {};
		            for (let i in messages[func]){
		            	result.args[messages[func][i]] = args.pop();
		            }
		            func = '';
		            args = [];
		        }
	        }
	    }
	} while (!ex);
	return result;
 }
 calculate();