const express = require('express')

// route parameter
const app = express()
app.get('/package/:packageName', (req, res) => {
  res.send({
    message: "Ova e GET request na rutata /package/:packageName",
    package_name: req.params['packageName']
  })
})

app.listen(3000)