exports.up = function(knex) {
  return knex.schema.createTable('farms', (table) => {
    table.increments()
    table.string('farm_name').notNullable().defaultTo('')
    table.string('type').notNullable().defaultTo('')
    table.string('website').notNullable().defaultTo('')
    table.string('farm_image').defaultTo('https://blog.generalmills.com/wp-content/uploads/Cascadian-Farm-featured-022216-700x350.jpg')
    table.string('password').notNullable().defaultTo('')
    table.string('email').unique().notNullable().defaultTo('')
    table.string('location').notNullable().defaultTo('')
    table.boolean('is_seller').notNullable().defaultTo(true)
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('farms')
}
