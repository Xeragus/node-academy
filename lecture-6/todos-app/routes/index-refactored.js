const express = require('express')
      , router = express.Router()
      , todo_controller = require('../controllers/todoController')
      
router
  .get('/', todo_controller.todo_index)
  .get('/create', todo_controller.todo_create)
  .post('/create', todo_controller.todo_post_create)
  .get('/:id', todo_controller.todo_edit)
  .post('/:id', todo_controller.todo_post_edit)
  .get('/:id/delete', todo_controller.todo_delete)

  module.exports = router
