const checkout = [
  '{"name": "Erase", "price": 3.50}',
  '{"name": "notebook", "price": 14.99}',
  '{"name": "Pencil Kit", "price": 42.00}',
  '{"name": "Pencil", "price": 7.50}'
]

const forOO = json => JSON.parse(json)
const onlyPrice = product => product.price

//coletando apenas o preço
const result = checkout.map(forOO).map(onlyPrice)
console.log(result)