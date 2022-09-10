const products = [
    { name: 'PS5', price: 2799, fragile: true},
    { name: 'Graphic Card', price: 1999, fragile: true},
    { name: 'glass', price: 19.99, fragile: true},
    { name: 'cup of plastic', price: 29.99, fragile: false}
]

console.log(products.filter(function(p) {
    return p.price > 2000
}))


