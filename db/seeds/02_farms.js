exports.seed = function(knex) {
  return knex('farms').del()
  .then(() => {
    return knex('farms').insert([
      {
        id: 1,
        farm_name: 'Nash\'s',
        type: 'farm',
        website: 'http://nashsorganicproduce.com/',
        farm_image: 'http://nashsorganicproduce.com/images/banners/Banner_Nash.png',
        password: 'nashs',
        email: 'nashsfarm@gmail.com',
        location: 'Centralia, WA',
        is_seller: true,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        farm_name: 'Olsen Farms',
        type: 'farm',
        website: 'http://www.olsenfarms.com/',
        farm_image: 'http://4.bp.blogspot.com/-ZGKzE3QTyhE/WMJiLkYVHaI/AAAAAAAAAQM/lTajI2geAKkQ61J72wPNMj6y06r-TyT2ACK4B/s1600/Olsen%2BFarms%2BCover%2BPicture.jpg',
        password: 'olsen',
        email: 'olsenfarms@me.com',
        location: 'Centralia, WA',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        farm_name: 'Oxbow',
        type: 'farm',
        website: 'http://www.oxbow.org/',
        farm_image: 'http://www.oxbow.org/wp-content/uploads/2017/01/oxbow_logo_white.png',
        password: 'oxbow',
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
