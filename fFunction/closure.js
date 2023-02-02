// Cloruse é escopo criado quando uma função é declarada
// Escopo permite a função acessar e manipular vars externas à função

// Contexto Léxico!

const x = "Global!"

function fora () {
    const x = "Local!"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)