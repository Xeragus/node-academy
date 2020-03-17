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
            .use('/random', (req, res, next) => {
              throw new Error('You can\'t access a random route!')
            })
            .use((err, req, res, next) => {
              console.log('Error handled: ', err.message)
              res.writeHead(500)
              res.end('Server error!')
            })

http.createServer(app)
    .listen(3000)

console.log('Server running on port 3000...')
