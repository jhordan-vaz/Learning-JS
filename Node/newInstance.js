// uma factory retorna um novo OO

module.exports = () => {
  return {
    valor: 1,
    inc () {
      this.valor++
    }
  }
}

