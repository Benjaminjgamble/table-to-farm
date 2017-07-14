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
  console.log(id);
  farm.getFarmProducts(id)
  .then((farmProducts) => {
    res.json(farmProducts)
  }).catch((err) => {
    console.log(err);
  })
}

function farmSignUp (req, res) {
  console.log('in controller', req.body);
  let newFarm = req.body
  let marketArr = req.body.atMarkets
  console.log('marketArr', marketArr);
  delete newFarm.atMarkets
  farm.signUp(newFarm)
  .then((returnedFarm) => {
    console.log('returnedFarm', returnedFarm[0]);
    newFarm = returnedFarm;
    return farm.farmMarketJoin(marketArr, returnedFarm[0].id)
  })
  .then((insertedFarmMarkets) => {
    newFarm.markets = insertedFarmMarkets;
    console.log(newFarm);
    res.json(newFarm)
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = { getPurveyor, getProductsByFarm, getFarms, farmSignUp }
