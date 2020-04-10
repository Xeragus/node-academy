var express = require('express')
var router = express.Router()
let todos = []

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', { todos })
      })
      .get('/create', (req, res) => {
        res.render('create')
      })
      .post('/create', (req, res) => {
        req.body.id = todos.length + 1

        todos.push(req.body)

        res.render('index', { todos })
      })
      .get('/edit/:id', (req, res) => {
        const todo = todos.find((todo) => {
          return todo.id == req.params.id
        })

        if (!todo) res.send(404)

        console.log(todo)

        res.render('edit', { todo })
      })
      .post('/edit/:id', (req, res) => {
        const todo = todos.find((todo) => {
          return todo.id == req.params.id
        })

        todo.title = req.body.title
        todo.description = req.body.description

        res.render('index', { todos })
      })
      .get('/delete/:id', (req, res) => {
        todos = todos.filter((todo) => {
          return todo.id != req.params.id
        })

        res.render('index', { todos })
      })

module.exports = router
