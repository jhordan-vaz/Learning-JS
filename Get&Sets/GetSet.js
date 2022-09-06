const sequency = {
  _valor: 1, 
  get valor() { return this._valor++ },
  set valor(valor) {
     if(valor > this._valor) {
        this._valor = valor
     }
  }
}

console.log(sequency.valor, sequency.valor)
sequency.valor = 545
console.log(sequency.valor, sequency.valor)
sequency.valor = 308
console.log(sequency.valor, sequency.valor)