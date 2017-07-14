const knex = require('../../db/knex.js');

class Farms {
  constructor () {
  }

  static getAllFarms () {
    return knex('farms')
    .select('farms.id as farmsId', 'products.id as ProductsId', 'email', 'farm_name', 'location', 'farm_id')
    .innerJoin('products', 'farms.id', 'products.farm_id')
    .where('farms.id', 1)
  }

  static getFarms () {
    return knex('farms')
  }

  static getFarmProducts (id) {
    return knex('products')
    .where('farm_id', id)
  }

  static signUp (newFarm) {
    return knex('farms')
    .insert(newFarm)
    .returning('*')
  }

  static farmMarketJoin (marketArr, newFarmId) {
    let promises = marketArr.map((id) => {
      return knex('farms_markets')
      .insert({
        farm_id: newFarmId,
        market_id: id
      })
      .returning('*')
    })

    return Promise.all(promises)

  }

}

module.exports = Farms
