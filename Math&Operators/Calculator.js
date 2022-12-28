const prompt = require('prompt-sync')({signit: false});

let a;
let b;
let result;
let operation;

let addition = "+";
let subtratcion = "-";
let multiplication = "*";
let division = "/";

console.log("Welcom to the calculator!");
console.log("Please, choose an operation below:");

console.log("Addition + , Subtraction - , Division / , Multiplication *.");

operation = prompt("Operation: ");
console.log(`Operation: ${operation} was selected!`);

console.log("type the number a:")
console.log("type the number b:")

a = prompt()
b = prompt()

if (operation = "+"){
    return a + b;
}

if (operation = "-"){
  return a + b;
}

if (operation = "/"){
  return a + b;
}

if (operation = "*"){
  return a + b;
}

console.log(operation)


