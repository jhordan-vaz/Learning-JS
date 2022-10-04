const express = require('express')
const routes = express.Router()

let db = [
  { '1': { name: 'Client 1', age: '23'}},
  { '2': { name: 'Client 2', age: '42'}},
  { '3': { name: 'Client 3', age: '45'}}
]

// Buscar dados
routes.get('/', (req, res) => {
  return res.json(db)
})

// Inserir dados
routes.post('/add', (req, res) => {
  const body = req.body 

  if(!body)
      return res.status(400).end()

  db.push(body)
  return res.json(body)
})

// Deletar dados 
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
          return item
    }) 

    db = newDB

    return res.send(newDB)
})

module.exports = routes