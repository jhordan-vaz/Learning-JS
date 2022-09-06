class grandpa{
  constructor(lastName) {
    this.lastName = lastName
  }
}

class father extends grandpa {
    constructor(lastName, profession = "Professor") {
      super(lastName)
      this.profession = profession
    }
}

class son extends father {
  constructor() {
    super('Vaz')
  }
}

const son = new son
console.log(son)
