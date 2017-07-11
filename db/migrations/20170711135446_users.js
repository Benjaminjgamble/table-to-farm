exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').defaultTo('')
    table.string('user_image').defaultTo('https://image.flaticon.com/icons/png/128/181/181546.png')
    table.string('password').notNullable().defaultTo('')
    table.string('email').unique().notNullable().defaultTo('')
    table.boolean('is_seller').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
