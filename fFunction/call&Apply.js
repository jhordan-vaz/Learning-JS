function getPrice(tax = 0, coin = 'R$') {
    return `${coin} ${this.price * (1 - this,desc) * (1 + tax)}`
}

const product = {
    name: "Grapic Card",
    price: 3999,
    desc: 0.15,
    getPrice
}

globalThis.price = 30
globalThis.desc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = { price: 67999, desc: 0.20}

console.log(getPrice.call(car, 0.17, "$"))
console.log(getPrice.apply(global, [0.17, "$"]))