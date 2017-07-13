const knex = require('../../db/knex.js');

class Markets {
  constructor () {
  }

  static getAll () {
    return knex('markets')
  }

  static farmsMarketsJoin() {
    return knex('farms_markets')
  }

}

module.exports = Markets
