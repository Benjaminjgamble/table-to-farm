exports.seed = function(knex) {
  return knex('farms_markets').del()
  .then(() => {
    return knex('farms_markets').insert([
      {
        id: 1,
        farm_id: 2,
        market_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        farm_id: 3,
        market_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        farm_id: 3,
        market_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('farms_markets_id_seq', (SELECT MAX(id)FROM farms_markets))"
    )
  })
}
