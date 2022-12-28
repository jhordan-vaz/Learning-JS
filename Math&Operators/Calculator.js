const prompt = require('prompt-sync')({sigint: false});

let a;
let b;
let result;
let operation;

console.log("Welcom to the calculator!");
console.log("Please, choose an operation below:");

console.log("Addition + , Subtraction - , Division / , Multiplication *.");

operation = prompt("Operation: ");
console.log(`Operation: ${operation} was selected!`);

const soma = function(a, b) {
  return a + b;
}

if (operation = "+"){
    return result = a + b;
}

if (operation = "-"){
  return result = a - b;
}

if (operation = "/"){
  return result = a / b;
}

if (operation = "*"){
  return result = a * b;
}

console.log("type the number a:")
a = prompt()
console.log("type the number b:")
b = prompt()

console.log(result)


