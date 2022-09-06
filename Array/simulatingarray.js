const almostArray = {0: 'Artorias', 1: 'PinWeel', 2: 'Gwyn'}
console.log(almostArray)
Object.defineProperty(almostArray, 'toString', {
  value: function() {return Object.values(this)},
  enumerable: false
})

console.log(almostArray[0]) // consegue acessar o atributo de um OO 

const myArray = ['Asylum Demon', 'ornstein', 'smough']
console.log(almostArray.toString(), myArray)
