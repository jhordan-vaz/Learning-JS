const port = 5741

const express = require('express')
const appReq = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase') // import do database

appReq.use(bodyParser.urlencoded({extended: true})) // retorna uma função middleware

//todos os dados passarão pela 'urlencoded', se for URL vai ser convertido para body

/*passar uma funçao middleware
appReq.get('/products', (req, res, next) => {
       res.send({name: 'Nyarlathotep', price: 4999.99 }) //converte para JSON
})*/


appReq.get('/products', (req, res, next) => {
       res.send(dataBase.getProducts()) 
})

//req.params = aonde meus parâmetros foram feitos.  

appReq.get('/products/:id', (req, res, next) => {
      res.send(dataBase.getProducts(req.params.id)) 
})

appReq.post('/products', (req, res, next) => {
      const product = dataBase.productSave({
        name: req.body.name,
        price: req.body.price
      })
      res.send(product) // gerar e converter um JSON para web
})

appReq.listen(port, () => { 
      console.log(`Server is Running in port ${port}.`)
})