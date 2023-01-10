function tratarError(erro) {
    throw {
      nome: erro.name,
      msg: erro,message,
      date: new Date
    }
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!")
  } catch (e) {
      tratarError (e)
  } finally {
      console.log("Encerrado.")
  }
}

const obj = { nome: "Jhord" }
imprimirNome(obj);