exports.seed = function(knex) {
  return knex('comments').del()
  .then(() => {
    return knex('comments').insert([
      {
        id: 1,
        user_id: 1,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        user_id: 2,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        user_id: 3,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('comments_id_seq', (SELECT MAX(id)FROM comments))"
    )
  })
}
