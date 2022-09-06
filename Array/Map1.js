const res = require("express/lib/response")

const nums = [1, 2, 3, 4, 5]

// Map é um for com propósito
let result = nums.map(function(e) {
    return e * 2
})

console.log(result)

const sum10 = e => e + 10
const triple = e => e * 3
const money = e => `R${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(sum10).map(triple).map(money)
console.log(result)
