function getRandomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let number = 0;

while(number != -1) {
    number = getRandomNumber(-1, 10)
    console.log(`Numbero escolhido foi ${number}.`)
}

console.log("Finalizado!")