exports.up = function(knex) {
  return knex.schema.createTable('farms_markets', (table) => {
    table.increments()
    table.integer('farm_id').references('farms.id').onDelete('CASCADE')
    table.integer('market_id').references('markets.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('farms_markets')
}
