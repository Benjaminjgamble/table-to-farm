const knex = require('../../db/knex.js');

class Products {
  constructor () {
  }

  static getAllProducts () {
    return knex('products')
  }

  static postProduct (newProduct) {
    return knex('products')
    .insert(newProduct)
    .returning('*')
  }

}

module.exports = Products
