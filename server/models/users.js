const knex = require('../../db/knex.js');

class Users {
  constructor () {
  }

  static getAll () {
    return knex('users')
  }

}

module.exports = Users
