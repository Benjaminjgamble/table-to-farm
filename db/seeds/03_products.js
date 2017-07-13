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
        product_name: 'Asparagus',
        type: 'Vegetable',
        image: 'https://static01.nyt.com/images/2016/04/20/dining/20ASPARAGUS5/20ASPARAGUS5-videoLarge.jpg',
        in_season: true,
        description: 'Fresh, green asparagus is a well-loved vegetable, delectably crisp and sweet. When it\'s available at the market or grocery, use it in abundance.',
        price: 89,
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        product_name: 'Honey',
        type: 'Foraged',
        image: 'http://www.beverlybees.com/wp-content/uploads/2013/05/DSC_0020.jpg',
        in_season: true,
        description: 'To make one pound of honey, bees must collect nectar from two million flower blossoms.',
        price: 89,
        farm_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        product_name: 'Pumpkin',
        type: 'Vegetable',
        image: 'http://franklinfarmersmarket.com/wp-content/uploads/2015/09/IMG_4694-1024x683.jpg',
        in_season: true,
        description: 'A pumpkin is a cultivar of a squash plant, most commonly of Cucurbita pepo, that is round, with smooth, slightly ribbed skin, and deep yellow to orange coloration ...',
        price: 89,
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        product_name: 'Kombucha',
        type: 'Handmade',
        image: 'http://dailygarnish.com/wp-content/uploads/2013/01/WeStartedABusiness_F974/SOUND1.jpg',
        in_season: true,
        description: 'Kombucha is a variety of fermented, lightly effervescent sweetened black or green tea drinks that are commonly intended as functional beverages for their ...',
        price: 89,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        product_name: 'Oysters',
        type: 'Cultivated',
        image: 'http://www.mamachallenge.com/wp-content/uploads/2016/07/DFM11.jpg',
        in_season: true,
        description: 'Oyster is the common name for a number of different families of salt-water bivalve molluscs that live in marine or brackish habitats. In some species the valves ...',
        price: 89,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        product_name: 'Apple',
        type: 'Fruit',
        image: 'http://blog.ruhlman.com/images/old/6a00d83451b42169e20120a6339608970c-800wi.jpg',
        in_season: true,
        description: 'Apples belong to the Rose family of plants and are joined in that family by a wide range of very popular foods, including apricots, plums, cherries, peaches, ...',
        price: 89,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        product_name: 'Bread',
        type: 'Baked Good',
        image: 'http://blog.kingarthurflour.com/wp-content/uploads/2016/08/Stenciling-21-900x563.jpg',
        in_season: true,
        description: 'The dough in this video is the Master recipe from The New Artisan Bread in Five Minutes a Day , but this method can be used for any of our doughs.',
        price: 89,
        farm_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
          id: 10,
          product_name: 'Raspberries',
          type: 'Fruit',
          image: 'http://www.kitchentreaty.com/wp-content/uploads/2014/11/raspberry-puff-pastry-tart-with-honey-mascarpone-cream-and-pistachios.jpg',
          in_season: true,
          description: 'Raspberries are relatively easy to grow and—with proper care—can bear fruit indefinitely! Though raspberry bushes are naturally inclined to grow in cooler ...',
          price: 89,
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
