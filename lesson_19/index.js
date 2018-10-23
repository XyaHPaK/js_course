// task
function Human(name, age){
    this.name = name;
    this.age = age;
}
Human.prototype.sayHello = function(){ console.log( `Hello, my name is  ${this.name}, i am ${this.age} years old` ) };
function AlevelStudent(name,age,marks){
    Human.call(this, name, age);
    this.marks = marks;
}
AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.averageMark = function(){
    let marksSum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        marksSum += this.marks[i];
    }
    return marksSum/this.marks.length;
};
// timer
function Timer (countNum){
    this.count = document.getElementById('count');
    this.seconds = 0;
    this.numOfNum = countNum;
    this.start = function (){
        this.id = setInterval(() => {
			const index = this.seconds % (this.numOfNum * 2);
			if (index < this.numOfNum) {
				this.items[index].style.background = 'green';
			} else if (this.items[this.numOfNum * 2 - index - 1]) {
				this.items[this.numOfNum * 2 - index - 1].style.background = 'black';
			}

            this.count.innerText = `${++this.seconds} seconds`;
        }, 1000);
    }
    this.stop = () => clearInterval(this.id);
    this.items = [];

    for (let i = 0; i < this.numOfNum; i += 1) {
        const item = document.createElement('span');

        item.innerText = i + 1;

        this.a.appendChild(item);
        this.items.push(item);

        if (i < this.numOfNum - 1) {
            const coma = document.createElement('span');
            coma.innerText = ', ';
            this.a.appendChild(coma);
        }
    }
}
