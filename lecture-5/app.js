const express = require('express')

const app = express()
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use((req, res) => {
        if (req.body.product_name) {
          res.end('Body parsed! The name of the product is ' + req.body.product_name)
        } else {
          res.end('Body does not have a product name!')
        }
      })
      .use((err, req, res, next) => {
        res.end('Invalid body!')
      })
      .listen(3000)

console.log('Server running on port 3000...')