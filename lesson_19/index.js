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