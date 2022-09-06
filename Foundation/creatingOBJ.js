// Funções construtoras

function Product(name, price, disc) {
  this.name = name;
  this.getPriceDisc = () => {
    return price * (1 - disc)
  }
}

const p1 = new Product("Smartphone", 7.99, 0.15);
const p2 = new Product("Graphic cards", 1999.99, 0.15);
console.log(p1.getPriceDisc(), p2.getPriceDisc())

//Factory Function

function createEmployee(name, baseSalary, lack) {
  return{
    name,
    baseSalary,
    lack,
    getSalary() {
      return (baseSalary / 30) * (30 - lack)
    }
  }
}

const emp1 = createEmployee("Jhordan", 4999, 4);
const emp2 = createEmployee("Vaz", 6000, 1);
console.log(emp1.getSalary(), emp2.getSalary())

// Object.create
const son = Object.create(null)
son.name = 'jhordan'
console.log(son)

// jason to obj

const fromJSON = JSON.parse('{"info": "im a JSON"}')
console.log(fromJSON.info)