function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valora acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(3, 5))
console.log(area(8, 8))
console.log(area())
console.log(area(2, 2 ,17 ,13 ,15))