const person = {
  name: "Jhord",
  age: 22,
  weight: 80
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

/*Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]} `)
})*/

Object.entries(person).forEach(([key, valor]) => {
   console.log(`${key}: ${valor}`)
})

Object.defineProperties(person, "birthday", {
   enumerable: true,
   writable: false,
   value: "31/08/1999"
})


person.birthday = "31/08/2000"
console.log(person.birthday)
console.log(Object.keys(person))

//Obj.assign

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)