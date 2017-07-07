exports.seed = function(knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert([
      {
        id: 1,
        product_name: 'Onion',
        type: 'vegetable',
        image: 'http://dreamicus.com/data/onion/onion-01.jpg',
        in_season: true,
        description: 'Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 29,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        product_name: 'Potato',
        type: 'vegetable',
        image: 'https://cdn.shopify.com/s/files/1/1017/2183/t/2/assets/live-preview-potato-standing.png?5666421063083394035',
        in_season: true,
        description: 'Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 31,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        product_name: 'Chicken',
        type: 'meat',
        image: 'https://cdn.davidwolfe.com/wp-content/uploads/2016/10/shutterstock_315615884-750x600.jpg',
        in_season: true,
        description: 'Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
