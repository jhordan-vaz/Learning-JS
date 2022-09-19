const port = 3003 

const express = require('express')
const appReq = express()
const dataBase = require('./dataBase') // import do database

/*passar uma funçao middleware
appReq.get('/products', (req, res, next) => {
       res.send({name: 'Nyarlathotep', price: 4999.99 }) //converte para JSON
})*/


appReq.get('/products', (req, res, next) => {
       res.send(dataBase.getProducts()) 
})

//req.params = aonde meus parâmetros foram feitos.  

appReq.get('/products/:id', (req, res, next) => {
      res.send(dataBase.getProduct(req.params.id)) 
})

appReq.post('/products', (req, res, next) => {
      const product = dataBase.productSave({
        name: req.body.name,
        price:  req.body.price
      })
      res.send(product) // gerar e converter um JSON para web
})

appReq.listen(port, () => { 
      console.log(`Server is Running in port ${port}.`)
})