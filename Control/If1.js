function passouDeAno(nota) {
    if(nota >= 7)  {
        console.log("Aprovado com" + nota)
    }
}
passouDeAno(8.6)
passouDeAno(7.5)

function seForVerdadeiro(valor) {
    if(valor) {
        console.log("É verdadeiro: " + valor)
    }
}

seForVerdadeiro()
seForVerdadeiro(null)
seForVerdadeiro(undefined)
seForVerdadeiro(NaN)
seForVerdadeiro("")
seForVerdadeiro(0)
seForVerdadeiro(-1)
seForVerdadeiro("  ")
seForVerdadeiro("?")
seForVerdadeiro([])
seForVerdadeiro([5, 7])
seForVerdadeiro({})