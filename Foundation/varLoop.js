const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

//var nao tem escopo de funcao e sempre vai imprimir o valor maior do loop.