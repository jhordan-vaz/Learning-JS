const fs = require('fs')

const product = {
  name: 'Cellphone',
  price: 1499.99,
  discount: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(product), err => {
    console.log(err || 'File saved!')
})
