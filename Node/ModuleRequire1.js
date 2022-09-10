//exports e imports pelo terminal 
// node -v para saber a versao
//npm -v 
// npm i lodash

const _ = require ('lodash')

//espera encontrar "algum arquivo"

setInterval(() => console.log(_.random(1, 1000)), 2000) 

//executa valor aleatorio de 2 em 2 segundos em RNG