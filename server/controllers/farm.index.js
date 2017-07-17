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

function getFarms (req, res) {
  farm.getFarms()
  .then((farms) => {
    res.json(farms)
  }).catch((err) => {
    console.error(err);
  })
}

function getProductsByFarm (req, res) {
  let id = req.params.id
  farm.getFarmProducts(id)
  .then((farmProducts) => {
    res.json(farmProducts)
  }).catch((err) => {
    console.log(err);
  })
}

function farmSignUp (req, res) {
  let newFarm = req.body
  let marketArr = req.body.atMarkets
  delete newFarm.atMarkets

  farm.signUp(newFarm)
  .then((returnedFarm) => {
    newFarm = returnedFarm;
    return farm.farmMarketJoin(marketArr, returnedFarm[0].id)
  })
  .then((insertedFarmMarkets) => {
    newFarm.markets = insertedFarmMarkets;
    res.json(newFarm)
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = { getPurveyor, getProductsByFarm, getFarms, farmSignUp }
