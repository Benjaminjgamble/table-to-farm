const knex = require('../../db/knex.js');

class Products {
  constructor () {

  }

  static getAllProducts () {
    console.log('in products.model.getAllProducts');
    return knex('products')
  }

  static postProduct (newProduct) {
    console.log('in post model', newProduct);
    return knex('products').insert(newProduct).returning('*')
  }

}

module.exports = Products
