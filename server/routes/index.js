var express = require('express')
var router = express.Router()
const products = require('../controllers/products.index')
const farm = require('../controllers/farm.index')
const users = require('../controllers/users.index')
const cloudinary = require('cloudinary')

/* GET home page. */
router.get('/farm', farm.getPurveyor)
router.get('/farms', farm.getFarms)
router.get('/users', users.getAllUsers)
router.get('/products', products.getAllProducts)
router.get('/farm/:id', farm.getProductsByFarm)
router.get('/products/:id', products.getProductById)
router.patch('/products/:id/edit', products.editProductById)
router.post('/products', products.postProduct)
router.post('/cloudinary', products.cloudinaryUpload)

module.exports = router;
