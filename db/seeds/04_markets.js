exports.seed = function(knex) {
  return knex('markets').del()
  .then(() => {
    return knex('markets').insert([
      {
        id: 1,
        market_name: 'U-District',
        dates_open: 'Saturdays, Year Round',
        hours_open: '9am - 2pm',
        market_location: 'University Way NE 50th, 98105',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        market_name: 'Capitol Hill',
        dates_open: 'Sundays, Year Round',
        hours_open: '11am - 3pm',
        market_location: 'Broadway Ave E and E Pine St',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        market_name: 'West Seattle',
        dates_open: 'Sundays, Year Round',
        hours_open: '10am - 2pm',
        market_location: 'California Ave SW & SW Alaska, 98116',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        market_name: 'Columbia City',
        dates_open: 'Wednesdays, May 3 to Oct 11',
        hours_open: '3pm - 7pm',
        market_location: '37th Ave S & S Edmunds St, 98118',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        market_name: 'Lake City',
        dates_open: 'Thursdays, Jun 8 to Oct 5',
        hours_open: '3pm - 7pm',
        market_location: 'NE 125th & 28th NE, 98125',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        market_name: 'Phinney',
        dates_open: 'Fridays, Jun 2 to Oct 6',
        hours_open: '3:30pm - 7:30pm',
        market_location: 'N 67th St & Phinney Ave N, 98103',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        market_name: 'Magnolia',
        dates_open: 'Saturdays, Jun 3 to Oct 14',
        hours_open: '10am - 2pm',
        market_location: '33rd Ave W & W McGraw St',
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('markets_id_seq', (SELECT MAX(id)FROM markets))"
    )
  })
}
