const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Request starting...')

  console.log(req.headers)

  res.write('Zdravo na site!')
  
  res.end()
})

server.listen(3000)
console.log('Server running at http://127.0.0.1:3000')
