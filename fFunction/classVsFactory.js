class Person {
    constructor(name) {
        this.name = name // name é privado
    }
    falar() {
        console.log(`My name is ${this.name}`) // usar o this para tornar public
    }
}

const p1 = new Person("Jhordan")
p1.falar()

const createPerson = name => {
    return {
      falar: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson("Vaz")