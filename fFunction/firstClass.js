// Função em JS é First-class Object (Citizens)
// Higher-order Function

// criar de forma literal
function fun1() {}
// "Function", "Nome", "Parâmetro", "Retorno" < opcional.

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array
const Array = [function (a, b) { return a + b}, fun1, fun2]
console.log(Array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "Salve" }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log("Executando...") })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 7)(6)
const dezoitoMais = (soma)
console.log(3)