var express = require('express')
var router = express.Router()
const products = require('../controllers/products.index')
const farm = require('../controllers/farm.index')
const cloudinary = require('cloudinary')

/* GET home page. */
router.get('/products', products.getAllProducts)
router.post('/products', products.postProduct)
router.get('/farm', farm.getPurveyor)
router.get('/farm/:id', farm.getProductsByFarm)
router.post('/cloudinary', products.cloudinaryUpload)

module.exports = router;
