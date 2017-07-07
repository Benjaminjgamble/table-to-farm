var express = require('express');
var router = express.Router();
const products = require('../controllers/products.index')

/* GET home page. */
router.get('/products', products.getAllProducts)
router.post('/products', products.postProduct)

module.exports = router;
