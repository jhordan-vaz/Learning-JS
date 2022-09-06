const father = { name: "jhord", hairColor: "Black" }

const daughter1 = Object.create(father)
daughter1.name = "Ana"
console.log(daughter1.hairColor)

const daughter2 = Object.create(father, {
    name: {value: "Bea", writable: false, enumerable: true }
})

console.log(daughter2.name)
daughter2.name = "leticia"
console.log(`${daughter2.name} has hair ${daughter2.hairColor}`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for(let key in daughter2) {
  daughter2.hasOwnProperty(key) ?
      console.log(key) : console.log(`By inhertance: ${key}`)
}