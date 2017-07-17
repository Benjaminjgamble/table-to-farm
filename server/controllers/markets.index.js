const markets = require('../models/markets.js')

function getAll (req, res) {
  markets.getAll()
  .then((allMarkets) => {
    res.json(allMarkets)
  }).catch((err) => {
    console.error(err);
  })
}

function farmsMarketsJoin (req, res) {
  markets.farmsMarketsJoin()
  .then((join) => {
    res.json(join)
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = { getAll, farmsMarketsJoin }
