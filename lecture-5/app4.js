const express = require('express')

const app = express()
            .use(express.json())
            .use(express.urlencoded({ extended: true }))
            .use((req, res) => {
              console.log(req)
              
              res.send({
                message: "Primivme " + req.method + " request so slednite podatoci",
                name: req.body.name,
                duration: req.body.duration
              })
            })
            .listen(3000)
          
console.log('Server is listening on port 3000...')
