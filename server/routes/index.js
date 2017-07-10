var express = require('express');
var router = express.Router();
const products = require('../controllers/products.index')
const cloudinary = require('cloudinary');

/* GET home page. */
router.get('/products', products.getAllProducts)
router.get('/main', )
router.get('/signin', )
router.post('/products', products.postProduct)
router.post('/cloudinary', products.cloudinaryUpload)

module.exports = router;
