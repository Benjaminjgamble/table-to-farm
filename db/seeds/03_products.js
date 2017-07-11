exports.seed = function(knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert([
      {
        id: 1,
        product_name: 'Red Onion',
        type: 'Vegetable',
        image: 'http://www.seedsavers.org/site/img/SEO%20Images/0395-red-wethersfield-onion.jpg',
        in_season: true,
        description: 'These red onions are sweet and fresh from the farm. Great for slicing and eating raw, or cooking to bring out the sweetness and natural sugars.',
        price: 29,
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        product_name: 'Yukon Gold Potato',
        type: 'Vegetable',
        image: 'https://cdn.authoritynutrition.com/wp-content/uploads/2015/03/a-bunch-of-white-potatoes.jpg',
        in_season: true,
        description: 'These potatoes are great for all applications. With a nice thin skin, they are great for boiling and frying.',
        price: 31,
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        product_name: 'Chicken',
        type: 'meat',
        image: 'https://cdn.davidwolfe.com/wp-content/uploads/2016/10/shutterstock_315615884-750x600.jpg',
        in_season: true,
        description: 'These are free range, organic chickens. They have been fed a natural and hormone free diet. Good for all applications.',
        price: 89,
        farm_id: 1,
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
