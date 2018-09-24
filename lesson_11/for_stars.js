'use strict'
function join () {
	let obj = null;
	for (let i in arguments){
		if (typeof arguments[i] == 'object'){
			if (!obj){
				obj = arguments[i];
			} else {
				for (let x in arguments[i]) {
					if (!obj[x]){
						obj[x] = arguments [i][x];
					} else if (Array.isArray(arguments[i][x])){
						if (!Array.isArray(obj[x])){
							obj[x] = arguments[i][x];
						} else {
							for (let n in arguments[i][x]) {
								obj[x].push(arguments[i][x][n]);
							}
						}
					} else if ((typeof arguments[i][x] == 'number') || (typeof arguments[i][x] == 'string' )){
						if (typeof obj[x] !== 'object'){
							obj[x] += arguments[i][x];
						} else {
							obj[x] = arguments[i][x];
						}
					} else {
					 	obj[x] = arguments[i][x];
					}
				}
			}
		}
	}
	return obj;
}
join(3, { name: 'K', k: [3], j: {}, z: [], c: 1 }, 'Hello', { n: 3, k: [4] , z: null, c: () => 1}, { n: 7, name: 'ent', j: 13 });