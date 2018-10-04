'use strict'
function init (arr,n){
	const list = document.createElement('ul');
	document.body.prepend(list);
	for (let i in arr){
		let item = '';
		for (let j = 0; j < n; j++){
			item = document.createElement('li');
			item.classList.add(arr[i].className);
			for (let x in arr[i].attributes){
				item.setAttribute(x, arr[i].attributes[x]);
			}
			item.innerText = arr[i].content;
			list.append(item);
		}
	}
	listen();
}
init([
	{className: 'first', attributes: { type: 'circle', about: 'asd' }, content: 'first' },
	{className: 'second', attributes: { type: 'disc' }, content: 'second' },
	{className: 'third', attributes: { type: 'square' }, content: 'third' }
	],5);
function listen(){
	document.getElementsByTagName('button')[0].addEventListener('click', function(){
		let a = document.getElementsByTagName('ul');
		if (a.length){
			a[0].remove();
			console.log(true);
		} else {
			console.log(false);
		}
	});

}
