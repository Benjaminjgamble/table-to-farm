const products = require('../models/products.js')
const cloudinary = require('cloudinary');
const users = require('../models/users.js');

function getAllProducts (req, res) {
  products.getAllProducts()
  .then((allProducts) => {
    res.json(allProducts)
  }).catch((err) => {
    console.error(err);
    res.send(err)
  })
}

function getProductById (req, res) {
  let id = req.params.id

  products.getOneProduct(id)
  .then((soloProduct) => {
    res.json(soloProduct)
  }).catch((err) => {
    console.error(err);
  })
}

function deleteProduct (req, res) {
  let id = req.params.id

  products.deleteProduct(id)
  .then((a) => {
    res.json(a)
  }).catch((err) => {
    console.error(err);
  })
}

function getCommentsByProductId (req, res) {
  let id = req.params.id

  products.getComments(id)
  .then((comments) => {
    res.json(comments)
  })
}

function editProductById (req, res) {
  let id = req.body.id
  let body = req.body

  products.editProduct(id, body)
  .then((product) => {
    res.json(product)
  }).catch((err) => {
    console.error(err);
  })
}

function postProduct (req, res) {
  let newProduct = req.body

  products.postProduct(newProduct)
  .then((returnedProduct) => {
    res.json(returnedProduct)
  }).catch((err) => {
    console.error(err);
  })
}

function postComment (req, res) {
  let newComment = req.body
  console.log(newComment);
  users.postComment(newComment)
  .then((theComment) => {
    res.json(theComment)
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



module.exports = { getAllProducts, postProduct, cloudinaryUpload, getProductById, editProductById, getCommentsByProductId, deleteProduct, postComment }
