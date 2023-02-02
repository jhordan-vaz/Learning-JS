function createProduct(name, price) {
    return {
        name,
        price,
        descount: 0.1
    }
}

console.log(createProduct("Notebook", 2499.99))
console.log(createProduct("Graphic Card", 1399.99))