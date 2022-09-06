const pilot = ['Nameless', 'Dancer', 'AbyssWatcher', 'Vordt']
pilots.pop() // remove o ultimo oo da lista
console.log(pilot)

pilot.push('BorealDancer')
console.log(pilot) // adiciona um novo elemento a lista

pilot.shift() // remove o primeiro elemento da lista
console.log(pilot)

pilot.unshift('Gael') 
console.log(pilot)

//splice pode adicionar ou remover elementos

//adicionar
pilot.splice(2, 0, 'Midir', 'Vordt')
console.log(pilot)

//remover 
pilot.splice(3, 1) // vordt off
console.log(pilot)

const somePilot1 = pilot.slice(2) // novo array
console.log(somePilot1)

const somePilot2 = pilot.slice(1, 4) // pega do primeiro índice até o 3º  
console.log(somePilot2)
