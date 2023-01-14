Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const printNota = function (nota) {
    if (nota.entre(9, 10)) {
      console.log("Aprovado com nota alta!")
    } else if (nota.entre(7, 8.99)) {
      console.log("Aprovado!")
    } else if (nota.entre(4, 6.99)) {
      console.log("Recuperação!") 
    } else if (nota.entre(0, 3.99)) {
      console.log("Reprovado!")
    } else {
      console.log("Nota Inválida!")
    }
}

printNota(10)
printNota(8.9)
printNota(6.44)
printNota(2.3)
printNota(58)
printNota(11)
