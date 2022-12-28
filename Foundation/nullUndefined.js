let valor // nao inicializada
console.log(valor)
console.log(valor2)

valor = null // ausencia de valor/ não aponta pra um local de memoria 
console.log(valor)
//console.log(valor.toString()) // erro!

const product = {}
console.log(product.preco) // undefined / não tem a propriedade "preco"
console.log(product)

product.preco = 3.50
console.log(product)

product.preco = undefined // evitar atribuir undefined
console.log(!!product.preco)
console.log(product)

product.preco = null // sem preço
console.log(!!product.preco)
console.log(product)