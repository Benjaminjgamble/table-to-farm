const knex = require('../../db/knex.js');

class Products {
  constructor () {
  }

  static getAllProducts () {
    return knex('products')
  }

  static getOneProduct (id) {
    return knex('products')
    .where('products.id', id)
  }

  static getComments (id) {
    return knex('comments')
    .where('comments.product_id', id)
  }

  static postProduct (newProduct) {
    return knex('products')
    .insert(newProduct)
    .returning('*')
  }

  static editProduct (id, body) {
    return knex('products')
    .update(body, '*')
    .where({ id })
  }

}

module.exports = Products
