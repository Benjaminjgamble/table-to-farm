exports.seed = function(knex) {
  return knex('farms_products').del()
  .then(() => {
    return knex('farms_products').insert([
      {
        id: 1,
        farm_id: 1,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        farm_id: 2,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        farm_id: 3,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('farms_products_id_seq', (SELECT MAX(id)FROM farms_products))"
    )
  })
}
