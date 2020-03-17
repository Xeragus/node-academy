const express = require('express')

const app = express()
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use((req, res) => {
        res.send(200, 'Ova e odgovorot na prateniot request!')
      })
      .use((err, req, res, next) => {
        res.end(err.message)
      })
      .listen(3000)

console.log('Server running on port 3000...')