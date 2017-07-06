exports.seed = function(knex) {
  return knex('farms').del()
  .then(() => {
    return knex('farms').insert([
      {
        id: 1,
        farm_name: 'Nash\'s',
        email: 'nashsfarm@gmail.com',
        location: 'Centralia, WA',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        farm_name: 'Olsen Farms',
        email: 'olsenfarms@me.com',
        location: 'Centralia, WA',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        farm_name: 'Oxbow',
        email: 'oxbowfarms@gmail.com',
        location: 'Centralia, WA',
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('farms_id_seq', (SELECT MAX(id)FROM farms))"
    )
  })
}
