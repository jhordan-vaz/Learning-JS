const sequence = {
  _id: 1,
  get id() { return this._id++}
}

const products = {} // meu OO

// se o id do produto nao tiver settado a chave vai receber o valor de produto.
//caso estiver setado so atualiza para versao mais atual do produto

function productSave(product) {
     if (!product.id) product.id = sequence.id
     products[product.id] = product //chave é o ID do produto | valor é o product
     return product
}

//caso OO esteja nulo ou undefined retorna um valor vazio
function getProduct(id) {
      return products[id] || {} // retornar um OO vazio
}

function getProducts() {
      return Object.values(products) //retornar todos os valores dentro OO "Product"
}

module.exports = {productSave, getProduct, getProducts} 

