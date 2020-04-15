const Todo = require('../models/todo')
      , mongoose = require('mongoose')

module.exports = {
  get_index: async (req, res) => {
    try {
      const todosFromDatabase = await Todo.find()
      res.render('index', { 
        todos: todosFromDatabase 
      })
    } catch (error) {
      res.render('index', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: []
      })
    }
  },
  get_create: (req, res) => {
    res.render('create')
  },
  post_create: async (req, res) => {
    try {
      const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
      })
      await todo.save()
      const todos = await Todo.find()

      res.render('index', {
        error: false,
        message: 'Cheers! You added a new responsibility for yourself.',
        todos: todos
      })
    } catch (error) {
      res.render('create', {
        error: true,
        message: 'Error happened: ' + error.message,
      })
    }
  },
  get_edit: async (req, res) => {
    try {
      const todo = await Todo.findOne({ _id: req.params.id })

      res.render('edit', {
        todo: todo
      })
    } catch (error) {
      const todos = await Todo.find()

      res.render('index', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: todos
      })
    }
  },
  post_edit: async (req, res) => {
    try {
      await Todo.update({ _id: req.params.id }, {
        title: req.body.title,
        description: req.body.description
      })

      const todos = await Todo.find()
      
      res.render('index', {
        error: false,
        message: 'The todo with id #' + req.params.id + ' id updated!',
        todos: todos
      })
    } catch (error) {
      const todo = await Todo.findOne({ _id: req.params.id })

      res.render('edit', {
        error: true,
        message: 'Error happened: ' + error.message,
        todo: todo
      })
    }
  },
  get_delete: async (req, res) => {
    try {
      await Todo.remove({ _id: req.params.id })
      const todos = await Todo.find()

      res.render('index', {
        error: false,
        message: 'Todo is successfully removed',
        todos: todos
      })
    } catch (error) {
      const todos = await Todo.find()

      res.render('edit', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: todos
      })
    }
  }
}
