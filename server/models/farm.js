const knex = require('../../db/knex.js');

class Farms {
  constructor () {

  }

  static getAllFarms () {
    console.log('in farm.model.getAllfarms');
    return knex('farms')
    .select('farms.id as farmsId', 'products.id as ProductsId', 'email', 'farm_name', 'location', 'farm_id')
    .innerJoin('products', 'farms.id', 'products.farm_id')
    .where('farms.id', 1)
  }

  static getFarmProducts () {
    return knex('products')
    .where('farm_id', 1)
  }

  // static postFarmProductJoin (newJoin) {
  //   console.log('in post model', newJoin);
  //   return knex('farms_products').insert(newJoin).returning('*')
  // }

}

module.exports = Farms
