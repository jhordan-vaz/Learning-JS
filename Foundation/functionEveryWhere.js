//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3); 
imprimirSoma(2, 3, 9, 8, 7); // fraca tipagem, ignora outros numeros 
imprimirSoma(); //NaN


//funcao com retorno 
function soma(a, b = 0){
    return a + b;
}

console.log(soma(5, 3));
console.log(soma(7));
console.log(soma()); 