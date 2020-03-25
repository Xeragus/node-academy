const Todo = require('../models/todo')
      , mongoose = require('mongoose')

module.exports = {
  todo_index: async (req, res) => {
    try {
      const todos = await Todo.find()
      // 2 sintaksi za handle-anje na promisi: 1. then catch, 2. async await

      res.render('index', {
        error: false,
        message: 'All todos found in database',
        todos: todos
      })
    } catch (error) {
      res.render('index', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: []
      })
    }
  },
  todo_create: async (req, res) => {
    res.render('create')
  },
  todo_post_create: async (req, res) => {
    try {
      const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
      })

      await todo.save()
      todos = await Todo.find().exec()
      
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
  },
  todo_edit: async (req, res) => {
    try {
      const todo = await Todo.findOne({ _id: req.params.id })
      console.log(todo)

      if (!todo) res.send(404)

      res.render('edit', { todo: todo })
    } catch (error) {
      res.render('index', {
        error: true,
        message: 'There is no todo with the id #' + req.params.id
      })
    }
  },
  todo_post_edit: async (req, res) => {
    try {
      await Todo.update({ _id: req.params.id }, {
        title: req.body.title,
        description: req.body.description
      })

      

      const todos = await Todo.find()

      res.render('index', {
        error: false,
        message: 'The todo with id #' + req.params.id + ' is updated!',
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
  todo_delete: async (req, res) => {
    try {
      await Todo.remove({ _id: req.params.id })
      const todos = await Todo.find()

      res.render('index', {
        error: false,
        message: 'The todo with id #' + req.params.id + ' was deleted!',
        todos: todos
      })
    } catch (error) {
      const todos = await Todo.find()

      res.render('index', {
        error: true,
        message: 'Error happened: ' + error.message,
        todos: todos
      })
    }
  }
}