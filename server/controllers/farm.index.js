const farm = require('../models/farm.js')
const cloudinary = require('cloudinary');

function getPurveyor (req, res) {
  console.log('inside controller getPurveyor');
  farm.getAllFarms().then((allFarms)=>{
    console.log(allFarms);
    res.json(allFarms)
  }).catch((err) => {
    console.error(err);
  })
}

function postFarmProductJoin (req, res) {
  let newJoin = req.body
  console.log('inside controller postFarmProductJoin', req.body);
  farm.postFarmProductJoin(newJoin).then((newJoin) => {
    res.json(newJoin)
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = { getPurveyor, postFarmProductJoin }
