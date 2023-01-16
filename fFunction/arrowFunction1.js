let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return "Salve"
}

ola = () => "Salve!"
ola = _ => "Salve!" // possui um param
console.log(ola())

