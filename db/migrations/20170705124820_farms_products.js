exports.up = function(knex) {
  return knex.schema.createTable('farms_products', (table) => {
    table.increments()
    table.integer('farm_id').references('farms.id').onDelete('CASCADE')
    table.integer('product_id').references('products.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('farms_products')
}
