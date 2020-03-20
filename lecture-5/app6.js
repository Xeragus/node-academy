// /products - GET - vrati gi site produkti vo JSON response
// /products - POST - zacuvaj nov product vo nizata od pratenite podatoci vo body
// /products/:id - GET - vrati go produktot so dadenoto id
// /products/price/:price - GET - vrati gi site produkti sto imaat cena pogolema od :price

const express = require('express')

let products = []

let router = express.Router()

router.use(express.json()) // body parsing

router.route('/products')
      .get((req, res) => {
        res.send({
          message: 'Returns all products',
          items: products
        })
      })
      .post((req, res) => {
        products.push(req.body)

        res.send({
          message: 'A products is successfully created',
          items: products
        })
      })

router.route('/products/price/:price')
      .get((req, res) => {
        const price = req.params['price']

        let filteredProducts = products.filter((product) => {
          return product.price > price
        })

        res.send({
          message: 'Here are all products that have price bigger than ' + price,
          items: filteredProducts
        })
      })

router.route('/products/:id')
      .get((req, res) => {
        const id = req.params['id']

        const product = products.filter((product) => {
          return product.id == id
        })

        res.send({
          message: 'Here is your product',
          item: product
        })
      })

const app = express()
            .use(router)
            .listen(3000)