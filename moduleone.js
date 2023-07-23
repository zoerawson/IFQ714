//moduleone- 1.1//
//moduleone- 1.1//

// (1) KEYWORD (2) NAME = (3) VALUE

//KEYWORD
// var - original to Javascript
// let- allows us to reassign later on
//      - can initalise it without a value
// const- cannot be reassign, remains constant
//      - Must give it a value

// console.log('hello world');

// let pizzaTopping = "cheese";
// console.log(pizzaTopping);

// let courseCode = "IFQ714";
// console.log(courseCode);

// let name = 'zoe';
// let lastName = 'rawson';
// let age = 30;

// const interestRate = 0.3;
// console.log(interestRate);
//If we dont need to reassign a variable use const

//perfroming a task

function greet(courseCode) {
console.log("Hello! The message is:" + ' ' + courseCode);
}

greet('IFQ714');


///////

function addGreeting(message) {
 
    let greeting = "Hello! The message is: ";
    return greeting + message;
}

let unitCode = 'IFQ721';
newMessage = addGreeting(unitCode);
 

console.log(newMessage);