exports.seed = function(knex) {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([
      {
        id: 1,
        first_name: 'Benjamin',
        last_name: 'Gamble',
        password: 'benjamin',
        email: 'benjamin@something.com',
        is_seller: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        first_name: 'James',
        last_name: 'Fancy',
        password: 'james',
        email: 'james@something.com',
        is_seller: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        first_name: 'Kent',
        last_name: 'Garth',
        password: 'kent',
        email: 'kent@something.com',
        is_seller: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id)FROM users))"
    )
  })
}
