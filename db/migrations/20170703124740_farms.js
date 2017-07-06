exports.up = function(knex) {
  return knex.schema.createTable('farms', (table) => {
    table.increments()
    table.string('farm_name').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('location').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('farms')
}
