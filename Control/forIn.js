const notas = [6.7, 7.7, 8.5, 6.9, 9.9]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "jhord",
    sobrenome: "Vaz",
    idade: 23,
    peso: 80
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

