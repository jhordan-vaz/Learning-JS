console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Jhordan', 'Rafaela', 'Samantha')
console.log(approved)

approved = ['Jhordan', 'Rafaela', 'Samantha']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])
 

approved [3] = 'Pedro'
approved.push('Ana')
console.log(approved.length)

approved[9] = 'Lucas'
console.log(approved.length)
console.log(approved[8] == null)

console.log(approved)
approved.sort()
console.log(approved)

delete approved[1]
console.log(approved[1])
console.log(approved[2])

approved = ['Jhordan', 'Rafaela', 'Samantha']
approved.splice(1, 2, 'Element1', 'Element2')
console.log(approved)
console.log(approved)