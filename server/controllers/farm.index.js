const farm = require('../models/farm.js')
const cloudinary = require('cloudinary');

function getPurveyor (req, res) {
  farm.getAllFarms()
  .then((allFarms) => {
    res.json(allFarms)
  }).catch((err) => {
    console.error(err);
  })
}

function getProductsByFarm (req, res) {
  let id = req.params.id
  console.log(id);
  farm.getFarmProducts(id)
  .then((farmProducts) => {
    res.json(farmProducts)
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = { getPurveyor, getProductsByFarm }
