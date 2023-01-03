const pessoa = {
    nome: "Kendrick",
    idade: 23,
    endereco: {
        logradouro: "Ponte Alta",
        numero: 1
    }
}

const {nome, idade} = pessoa // retire "Nome", "Idade" de "Pessoa".
console.log(nome, idade);
 
const { nome: n, idade: i } = pessoa // nome recebe "n" como identificador.
console.log(n, i);

const {sobrenome, Bemhumorado = true} = pessoa
console.log(sobrenome, Bemhumorado);