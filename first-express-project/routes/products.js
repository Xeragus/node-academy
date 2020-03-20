var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('products', { id: 1, name: 'Red T-Shirt', price: '$29.99' });
})

module.exports = router;
