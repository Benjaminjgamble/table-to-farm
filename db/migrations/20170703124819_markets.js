exports.up = function(knex) {
  return knex.schema.createTable('markets', (table) => {
    table.increments()
    table.string('dates_open').notNullable().defaultTo('')
    table.string('hours_open').notNullable().defaultTo('')
    table.string('market_location').notNullable().defaultTo(0)
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('markets')
}
