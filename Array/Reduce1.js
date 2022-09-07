const students = [
  { name: 'Jhord', grade: 7.5, scholarship: false },
  { name: 'Nádia', grade: 9.5, scholarship: true },
  { name: 'Letícia', grade: 6.3, scholarship: false },
  { name: 'Cleber', grade: 5.5, scholarship: true }
]

console.log(students.map(s => s.grade))
const result = students.map(s => s.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}, 10)

console.log(result)