const knex = require('../../db/knex.js');

class Farms {
  constructor () {

  }

  static getAllFarms () {
    console.log('in farm.model.getAllfarms');
    return knex('farms')
    .select('farms.id as farmsId', 'farms_products.id as farmsProductsId', 'email', 'farm_name', 'location', 'product_id')
    .innerJoin('farms_products', 'farms.id', 'farms_products.farm_id')
    .where('farms.id', 1)
  }

  static postFarmProductJoin (newJoin) {
    console.log('in post model', newJoin);
    return knex('farms_products').insert(newJoin).returning('*')
  }

}

module.exports = Farms
