const counterA = require ('./UniqueInstance')
const counterB = require ('./UniqueInstance')

const counterC = require('./newInstance')()
const counterD = require('./newInstance')()

// novas instancias criadas a partid do factory

counterA.inc()
counterA.inc()
console.log(counterB.valor)

// node faz casting , A e B tera valor igual
// OO já criado sempre retorna o mesmo valor


counterC.inc()
counterC.inc()
console.log(counterC.valor, counterD.valor)

