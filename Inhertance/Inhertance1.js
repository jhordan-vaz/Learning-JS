const ferrari = {
  model: "f40",
  maxVel: 324
}

const volvo = {
  model: "v40",
  maxVel: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype__proto__)

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)