exports.seed = function(knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert([
      {
        id: 1,
        product_name: 'Onion',
        type: 'vegetable',
        season: 'Fall',
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        product_name: 'Potato',
        type: 'vegetable',
        season: 'Fall',
        price: 31,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        product_name: 'Chicken',
        type: 'meat',
        season: 'Fall',
        price: 89,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('products_id_seq', (SELECT MAX(id)FROM products))"
    )
  })
}
