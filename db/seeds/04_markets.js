exports.seed = function(knex) {
  return knex('markets').del()
  .then(() => {
    return knex('markets').insert([
      {
        id: 1,
        dates_open: '03/12 - 12/15',
        hours_open: 'Sunday 11-3',
        market_location: 'Ballard some address',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        dates_open: '01/04 - 7/15',
        hours_open: 'Saturday 9-3',
        market_location: 'Shoreline some address',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        dates_open: '12/12 - 12/11',
        hours_open: 'Fridays 9-5',
        market_location: 'Ballard some address',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        dates_open: '03/12 - 12/15',
        hours_open: 'Sundays 11-3',
        market_location: 'Wallingford some address',
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('markets_id_seq', (SELECT MAX(id)FROM markets))"
    )
  })
}
