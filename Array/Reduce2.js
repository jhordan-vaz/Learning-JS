const students = [
  { name: 'Jhord', grade: 7.5, scholarship: false },
  { name: 'Nádia', grade: 9.5, scholarship: true },
  { name: 'Letícia', grade: 6.3, scholarship: false },
  { name: 'Cleber', grade: 5.5, scholarship: true }
]

// 1: Are all students scholarship?
const scholarshipStudents = (result, scholarship) => result && scholarship
console.log(students.map(s => s.scholarship).reduce(scholarshipStudents))

// 2: Are any scholarship?
const anyScholarship = (result, scholarship) => result || scholarship
console.log(students.map(s => s.scholarship).reduce(anyScholarship))