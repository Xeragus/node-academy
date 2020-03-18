const http = require('http')
var fs = require('fs')

const send404 = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.write('Error 404: Resource not found')
  res.end()
}

const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('./public/index.html').pipe(res)
  } else {
    send404(res)
  }
})

server.listen(3000)
console.log('Server running at http://127.0.0.1:3000')
