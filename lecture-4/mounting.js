const connect = require('connect')
      , http = require('http')
      , util = require('util')

const app = connect()
            .use('/products', (req, res, next) => {
              util.log(util.format('Request recieved: %s, %s', req.method, req.url))
              res.end('This is the products route')
            })
            .use('/orders', (req, res, next) => {
              util.log(util.format('Request recieved: %s, %s', req.method, req.url))
              res.end('This is the orders route')
            })

http.createServer(app)
    .listen(3000)

console.log('Server running on port 3000...')