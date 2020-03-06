let fs = require('fs')

let myReadStream = fs.createReadStream('./text.txt')

myReadStream.on('data', function(chunk) {
  console.log('new chunk received')
  console.log(chunk)
})
