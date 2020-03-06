let path = require('path')
let fs = require('fs')

console.log(path.join('C','Program Files','Boban'))

let heavyFunc = () => {
    fs.writeFile('test.txt', 'ova e sodrzinata na file-ot', (err) => {
        console.log('zavrsi zapisuvanjeto na file-ot')
    })
}

heavyFunc()
console.log('ova e posle zavrsuvanjeto')