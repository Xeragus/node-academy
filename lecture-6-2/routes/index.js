var express = require('express')
var router = express.Router()
const index_controller = require('./../controllers/indexController')

router.get('/', index_controller.get_index)
      .get('/create', index_controller.get_create)
      .post('/create', index_controller.post_create)
      .get('/edit/:id', index_controller.get_edit)
      .post('/edit/:id', index_controller.post_edit)
      .get('/delete/:id', index_controller.get_delete)

module.exports = router
