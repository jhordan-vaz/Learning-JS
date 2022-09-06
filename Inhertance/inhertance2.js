// prototype chain
Object.prototype.attr0 = "0" // don't add a direct prototype


const granpa = { attr1: "A" }
const father = { __proto__: granpa, attr2: "B" }
const son = { __proto__: father, attr3: "C" }
console.log(son.attr0, son.attr1, son.attr2, son.attr3)

const car = {
  actualVel: 0,
  maxVel: 200,
  acceleratePlus(delta) {
    if(this.actualVel + delta <= this.maxVel) {
        this.actualVel += delta
    } else {
      this.actualVel = this.maxVel
    }
  },
  status() {
    return `${this.actualVel}Km/h of ${this.maxVel}Km/h`
  }
}

const subaru = {
    model: "XV",
    maxVel: 324 // shadowing
}

const volvo = {
  model: 'V40',
  status() {
    return `${this.model}: ${super.status()}`
  }
}

Object.setPrototypeOf(subaru, car)
Object.setPrototypeOf(volvo, car)

console.log(subaru)
console.log(volvo)

volvo.acceleratePlus(100)
console.log(volvo.status())

subaru.acceleratePlus(250)
console.log(subaru.status())