function getPrice(tax = 0, coin = 'R$') {
  return `${coin} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const product = {
  nome: 'Ipad',
  price: 4799,
  desc: 0.15,
  getPrice
}

global.price = 30;
global.desc =  0.15;
console.log(getPrice())
console.log(product.getPrice())

console.log("-------------------------")

const car = { price: 39999, desc: 0.20 }
console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log("-------------------------")

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(global, [0.17, '$'])) 
