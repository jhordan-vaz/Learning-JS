// person -> 123 -> {obj ...}
const person = { name: "jhordan" }
person.name = "jhord";
console.log(person)

// person -> 556 -> {obj...}
//you can't set another obj using the same "space"
//person = { name: "ana"}

Object.freeze(person) // freezing OO can't, set, change or add.
person.name = "jhordaan"
console.log(person.name);

console.log(person.name);
console.log(person);

const personConstant = Object.freeze({ name: "Jordinario"})
console.log(personConstant);