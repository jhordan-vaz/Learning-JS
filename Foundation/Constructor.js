class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
   console.log(`meu nome é ${this.name} e idade ${this.age}`)
  }
}

const p1 = new Person("João", 22);
p1.speak()

const person = name => {
  return {
    speak: () => console.log(`Meu nome é ${name}`)
  }
}

const p2 =  new Person("Jhordan" , "22");
p2.speak();