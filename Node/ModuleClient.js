const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

console.log(moduleA.hello)
console.log(moduleA.welcomToNode)
console.log(moduleA.seeYou)
console.log(moduleA)

console.log(moduleB.goodMorning)
console.log(moduleB.goodNight())
console.log(moduleB)

// Export para o client.  