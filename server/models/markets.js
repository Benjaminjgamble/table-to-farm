const knex = require('../../db/knex.js');

class Markets {
  constructor () {
  }

  static getAll () {
    return knex('markets')
  }

  static farmsMarketsJoin() {
    return knex('farms_markets')
    .select('farms_markets.id as farmsMarketsJoinId', 'farm_id', 'farm_image', 'farm_name', 'location', 'market_id', 'type', 'website', 'dates_open', 'hours_open', 'market_location', 'market_name')
    .innerJoin('farms', 'farms_markets.farm_id', 'farms.id')
    .innerJoin('markets', 'farms_markets.market_id', 'markets.id')
  }

}

module.exports = Markets
