Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return Array
}

const products = [
  { nome: 'PS5', price: 2799, fragile: true},
  { nome: 'Graphic Card', price: 1999, fragile: true},
  { nome: 'glass', price: 19.99, fragile: true},
  { nome: 'cup of plastic', price: 29.99, fragile: false}
]


const expensive = products => products.price >= 2000
const fragile = products => products.fragile

console.log(products.filter2(expensive).filter2(fragile))