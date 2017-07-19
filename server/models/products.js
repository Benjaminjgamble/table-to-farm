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
    .select('*', 'users.created_at as userCreated', 'comments.created_at as commentCreated')
    .innerJoin('users', 'comments.user_id', 'users.id')
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

  static deleteProduct (id) {
    return knex('products')
    .where('products.id', id)
    .del()
  }

}

module.exports = Products
