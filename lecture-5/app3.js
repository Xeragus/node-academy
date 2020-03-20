const express = require('express')

const app = express()
app.route('/')
    .all((req, res, next) => {
      res.write('ova e all route\n')
      next()
    })
    .get((req, res, next) => {
      res.end('ova e get ruta')
    })
    .post((req, res, next) => {
      res.end('ova e post ruta')
    })
    .delete((req, res, next) => {
      res.end('ova e delete ruta')
    })

app.listen(3000)
console.log('The app is listening on port 3000...')
