var numero = 1;
{
    var numero = 2; // var é sempre do escopo maior.
    console.log("Dentro =", numero);
  
}
console.log("Fora =", numero);