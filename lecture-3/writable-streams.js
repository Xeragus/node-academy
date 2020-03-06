let fs = require('fs')

let myReadStream = fs.createReadStream('./test.txt')  
let myWriteStream = fs.createWriteStream('./write.txt')

myReadStream.on('data', function(chunk) {
  console.log('new chunk received')
  myWriteStream.write(chunk)
})