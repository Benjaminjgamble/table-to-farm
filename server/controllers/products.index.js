const products = require('../models/products.js')
const cloudinary = require('cloudinary');

async function getAllProducts (req, res) {
  let allProducts

  try {
  allProducts = await products.getAllProducts()
    res.json(allProducts)
  } catch (err) {
    console.error(err)
    res.send(err)
  }
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
  console.log('inside comtroller getting comments', id);
  products.getComments(id)
  .then((comments) => {
    console.log(comments);
    res.json(comments)
  })

}

function editProductById (req, res) {
  let id = req.body.id
  let body = req.body

  products.editProduct(id, body)
  .then((product) => {
    console.log(product)
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

function cloudinaryUpload (req, res) {
  cloudinary.uploader.upload(req.body.file, function(result) {
    cloudinary.url('brughwtjzn2ocl1etpa0.jpg')
    res.send(result)
  })
}



module.exports = { getAllProducts, postProduct, cloudinaryUpload, getProductById, editProductById, getCommentsByProductId, deleteProduct }
