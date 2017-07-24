exports.seed = function(knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert([
      {
        id: 1,
        product_name: 'Skagit Valley Strawberries',
        type: 'Fruit',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916237/strawberry_qofk7r.jpg',
        in_season: true,
        description: 'There’s something different and special about Washington strawberries.',
        price: '.29',
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        product_name: 'Rainbow Radish',
        type: 'Vegetable',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916232/raddish_inpnqh.jpg',
        in_season: true,
        description: 'Custom blend of vigorous, uniform radish varieties in a rainbow mixture of pretty shades with crispy, mild flesh.',
        price: '1.08',
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        product_name: 'Yukon Gold Potatoes',
        type: 'Vegetable',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916225/potato_hcwuax.jpg',
        in_season: true,
        description: 'Yukon Gold is a large variety of potato most distinctly characterized by its thin, smooth eye-free skin and yellow-tinged flesh.',
        price: '.42',
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        product_name: 'Porkchops',
        type: 'Meat',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916218/porkchop_nldlgy.jpg',
        in_season: true,
        description: 'The pigs at Skagit River Ranch are raised outdoors where they root in the brush, dig in the sod, and cavort as only happy pigs can. We mix their feed on site to assure the purity of fresh, whole organic grains, rich in flax seed, corn and wheat.',
        price: '3.25',
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        product_name: 'Red Onions',
        type: 'Vegetable',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916212/onion_vnwvgy.jpg',
        in_season: true,
        description: 'Red onions, are cultivars of the onion,(Allium cepa) with purplish red skin and white flesh tinged with red. These onions tend to be medium to large in size and ...',
        price: '.50',
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        product_name: 'Organic Sweet Corn',
        type: 'Vegetable',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500916203/corn_nvuggd.jpg',
        in_season: true,
        description: 'Sweet corn is a variety of maize with a high sugar content. Sweet corn is the result of a naturally occurring recessive mutation in the genes which control ...',
        price: '1.29',
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        product_name: 'Oysters',
        type: 'Cultivated',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500917521/oyster_p3v9lo.jpg',
        in_season: true,
        description: 'Oyster is the common name for a number of different families of salt-water bivalve molluscs that live in marine or brackish habitats. In some species the valves ...',
        price: '18.00',
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        product_name: 'Washington Gala Apples',
        type: 'Fruit',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500917604/apple_fahvau.jpg',
        in_season: true,
        description: 'Apples belong to the Rose family of plants and are joined in that family by a wide range of very popular foods, including apricots, plums, cherries, peaches, ...',
        price: '1.29',
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        product_name: 'Bread',
        type: 'Baked Good',
        image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500917700/bread_gd2ctt.jpg',
        in_season: true,
        description: 'The dough in this video is the Master recipe from The New Artisan Bread in Five Minutes a Day , but this method can be used for any of our doughs.',
        price: '6.00',
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
          id: 10,
          product_name: 'Small Batch Kombucha',
          type: 'Beverage',
          image: 'http://res.cloudinary.com/benjaminjgamble/image/upload/v1500917797/kombucha_dzuqhj.jpg',
          in_season: true,
          description: 'This is traditional kombucha, crafted with care by Seattles original kombucha company. Our highest praise ... pick up your own at a local market. or visit us at our ...',
          price: '3.99',
          farm_id: 3,
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
