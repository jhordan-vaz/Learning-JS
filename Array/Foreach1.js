const approved = ['jhordan', 'Pedro', 'Filipe', 'Cleber']


//call back, chama por nome e dá o numero do índice
approved.forEach(function(name, index, array){
    console.log(`${index + 1} ${name}`)
    console.log(array)
})


//imprimindo os nomes sem numero/
approved.forEach(name => console.log(name)) 

const showApproved = approved => console.log(approved)
approved.forEach(showApproved)