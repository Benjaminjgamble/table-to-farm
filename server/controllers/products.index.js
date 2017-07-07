const products = require('../models/products.js')


function getAllProducts (req, res) {
  console.log('inside controller backside');
  products.getAllProducts().then((allProducts)=>{
    console.log(allProducts);
    res.json(allProducts)
  })
}

function postProduct (req, res) {
  let newProduct = req.body
  console.log('inside post controller', req.body);
  products.postProduct(newProduct).then((newProduct) => {
    res.json(newProduct)
  })
}

module.exports = { getAllProducts, postProduct }
