const knex = require('../../db/knex.js');

class Markets {
  constructor () {
  }

  static getAll () {
    return knex('markets')
  }

}

module.exports = Markets
