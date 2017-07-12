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

  static getFarmProducts (id) {
    return knex('products')
    .where('farm_id', id)
  }

}

module.exports = Farms
