const products = [
    { nome: 'PS5', price: 2799, fragile: true},
    { nome: 'Graphic Card', price: 1999, fragile: true},
    { nome: 'glass', price: 19.99, fragile: true},
    { nome: 'cup of plastic', price: 29.99, fragile: false}
]

console.log(products.filter(function(p) {
    return true
}))

