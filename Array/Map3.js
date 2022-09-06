Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const checkout = [
  '{"name": "Erase", "price": 3.50}',
  '{"name": "notebook", "price": 14.99}',
  '{"name": "Pencil Kit", "price": 42.00}',
  '{"name": "Pencil", "price": 7.50}'
]

const forOO = json => JSON.parse(json)
const onlyPrice = product => product.price

const result = checkout.map2(forOO).map2(onlyPrice)
console.log(result)

//funcionamento interno do map