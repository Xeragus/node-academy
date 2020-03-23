const express = require('express')
      , router = express.Router()

router
  .get('/', (req, res) => {
    res.render('index', { todos: todos })
  })
  .get('/create', (req, res) => {
    res.render('create')
  })
  .post('/create', (req, res) => {
    try {
      req.body.id = todos.length + 1

      todos.push(req.body)

      res.render('index', { 
        error: false,
        message: 'Cheers! You added a new responsibility for yourself.',
        todos: todos
      })
    } catch (error) {
      res.render('create', {
        error: true,
        message: 'Error happened: ' + error.message
      })
    }
  })
  .get('/:id', (req, res) => {
    try {
      const todo = todos.find((todo) => {
        return todo.id == req.params.id
      })

      if (!todo) res.send(404)

      res.render('edit', { todo: todo })
    } catch (error) {
      res.render('index', {
        error: true,
        message: 'There is no todo with the id #' + req.params.id
      })
    }
  })
  .post('/:id', (req, res) => {
    const todo = todos.find((todo) => {
      return todo.id == req.params.id
    })
    
    try {
      todo.title = req.body.title
      todo.description = req.body.description

      res.render('index', {
        error: false,
        message: 'The todo with id #' + req.params.id + ' is updated!',
        todos: todos
      })
    } catch (error) {
      res.render('edit', {
        error: true,
        message: 'Error happened: ' + error.message,
        todo: todo
      })
    }
  })
  .get('/:id/delete', (req, res) => {
    try {
      todos = todos.filter((todo) => {
        return todo.id != req.params.id
      })

      res.render('index', {
        error: false,
        message: 'The todo with id #' + req.params.id + ' was deleted!',
        todos: todos
      })
    } catch (error) {
      res.render('index', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: todos
      })
    }
  })

module.exports = router
