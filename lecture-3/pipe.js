const fs = require('fs')

const readableStream = fs.createReadStream('./test.txt')
const writableStream = fs.createWriteStream('./output.txt')

readableStream.pipe(writableStream)