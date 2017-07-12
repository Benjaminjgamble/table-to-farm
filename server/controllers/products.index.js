const products = require('../models/products.js')
const cloudinary = require('cloudinary');

function getAllProducts (req, res) {
  products.getAllProducts()
  .then((allProducts) => {
    res.json(allProducts)
  }).catch((err) => {
    console.error(err);
  })
}

function getProductById (req, res) {
  let id = req.params.id
  console.log('controller: getProductById', id);
  products.getOneProduct(id)
  .then((soloProduct) => {
    res.json(soloProduct)
  }).catch((err) => {
    console.error(err);
  })
}

// function editProductById (req, res) {
//   console.log('controller: editProductById req = ', req);
// }

function postProduct (req, res) {
  let newProduct = req.body

  products.postProduct(newProduct)
  .then((returnedProduct) => {
    res.json(returnedProduct)
  }).catch((err) => {
    console.error(err);
  })
}

function cloudinaryUpload (req, res) {
  cloudinary.uploader.upload(req.body.file, function(result) {
    cloudinary.url('brughwtjzn2ocl1etpa0.jpg')
    res.send(result)
  })
}



module.exports = { getAllProducts, postProduct, cloudinaryUpload, getProductById }
