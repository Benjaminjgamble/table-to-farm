const knex = require('../../db/knex.js');

class Products {
  constructor () {
  }

  static getAllProducts () {
    return knex('products')
  }

  static getOneProduct (id) {
    console.log('model: getOneProduct', id);
    return knex('products')
    .where('products.id', id)
  }

  static postProduct (newProduct) {
    return knex('products')
    .insert(newProduct)
    .returning('*')
  }

}

module.exports = Products
