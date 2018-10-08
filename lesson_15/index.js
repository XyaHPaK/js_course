'use strict';
// timer
(function() {
	function generateList(numOfNum, numbersParent) {
		const items = [];

		for (let i = 0; i < numOfNum; i += 1) {
			const item = document.createElement('span');

			item.innerText = i + 1;

			numbersParent.appendChild(item);
			items.push(item);

			if (i < numOfNum - 1) {
				const coma = document.createElement('span');
				coma.innerText = ', ';
				numbersParent.appendChild(coma);
			}
		}

		return items;
	}

	const numOfNum = 10;
	const numbersParent = document.getElementById('numbers');
	const startBtn = document.getElementById('start');
	const pauseBtn = document.getElementById('pause');
	const stopBtn = document.getElementById('stop');
	const count = document.getElementById('count');
	const items = generateList(numOfNum, numbersParent);
	const XTwoBtn = document.getElementById('X2');
	const XThreeBtn = document.getElementById('X3');
	const XOneBtn = document.getElementById('X1');
	let id;
	let seconds = 0;

	pauseBtn.disabled = true;
	stopBtn.disabled = true;
	XOneBtn.disabled = true;
	XTwoBtn.disabled = true;
	XThreeBtn.disabled = true;

	startBtn.addEventListener('click', () => {
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;
		XOneBtn.disabled = false;
		XTwoBtn.disabled = false;
		XThreeBtn.disabled = false;
		
		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, 1000);
	});

	pauseBtn.addEventListener('click', () => {
		XOneBtn.disabled = true;
		XTwoBtn.disabled = true;
		XThreeBtn.disabled = true;
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		clearInterval(id);
	});

	stopBtn.addEventListener('click', () => {
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		stopBtn.disabled = true;
		XOneBtn.disabled = true;
		XTwoBtn.disabled = true;
		XThreeBtn.disabled = true;
		clearInterval(id);
		for (let i in items) {
			items[i].style.background = 'none';
		}
		
		seconds = 0;
		count.innerText = '0 seconds';
	});
	XOneBtn.addEventListener('click', ()=>{
		XOneBtn.disabled = true;
		XTwoBtn.disabled = false;
		XThreeBtn.disabled = false;
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;
		clearInterval(id);
		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, 1000);	
	});
	XTwoBtn.addEventListener('click', ()=>{
		XTwoBtn.disabled = true;
		XOneBtn.disabled = false;
		XThreeBtn.disabled = false;
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;
		clearInterval(id);
		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, 500);	
	});
	XThreeBtn.addEventListener('click', ()=>{
		XOneBtn.disabled = false;
		XTwoBtn.disabled = false;
		XThreeBtn.disabled = true;
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;
		clearInterval(id);
		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, 333);	
	});
}())