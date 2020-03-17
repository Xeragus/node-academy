const connect = require('connect')
      , http = require('http')
      , util = require('util')

const app = connect()
            .use((req, res, next) => {
              util.log(util.format('Request recieved: %s, %s', req.method, req.url))
              next()
            })
http.createServer(app)
    .listen(3000)

console.log('Server running on port 3000...')