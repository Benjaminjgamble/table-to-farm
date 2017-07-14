const knex = require('../../db/knex.js');

class Users {
  constructor () {
  }

  static getAll () {
    return knex('users')
  }

  static signUp (newUser) {
    return knex('users')
    .insert(newUser)
    .returning('*')
  }

}

module.exports = Users
