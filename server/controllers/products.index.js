const products = require('../models/products.js')
const cloudinary = require('cloudinary');

function getAllProducts (req, res) {
  console.log('inside controller backside');
  products.getAllProducts().then((allProducts)=>{
    console.log(allProducts);
    res.json(allProducts)
  }).catch((err) => {
    console.error(err);
  })
}

function postProduct (req, res) {
  let newProduct = req.body
  console.log('inside post controller', req.body);
  products.postProduct(newProduct).then((newProduct) => {
    res.json(newProduct)
  }).catch((err) => {
    console.error(err);
  })
}

// USE MIDDLEWARE TO SEQUENTIALLY RUN CLOUDINARY THEN WATSON
function cloudinaryUpload (req, res) {
  cloudinary.uploader.upload(req.body.file, function(result) {
    console.log('cloudinary upload response', result)

cloudinary.url('brughwtjzn2ocl1etpa0.jpg', {effect: "improve", height: 300, radius: 10, width: 450, crop: "limit"})
    res.send(result)
  })
}



module.exports = { getAllProducts, postProduct, cloudinaryUpload }
