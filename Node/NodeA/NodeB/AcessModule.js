const modeuloA = require ('../../ModuleA')
console.log(modeuloA.hello)

const  mathRck = require('../../polyphia/index')
console.log(mathRck.mathRock)

const fBand = require('../../polyphia/index2')
console.log(fBand.polyph)



/*const http = require('http')
http.createServer((req, res) => {
  res.write('Funcional!')
  res.end()
}).listen(8080)*/

//localhost:8080 

// nome da pasta  |  nome do modulo instalado/função 

// "../" sai da pasta atual e retorna para anterior.
//../"diretorio"/"arquivo"
// Respeitar as letras maiúsculas e minúsculas.
// manter padrão CC.