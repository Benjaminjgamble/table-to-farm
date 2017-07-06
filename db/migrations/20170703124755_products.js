exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('product_name').notNullable().defaultTo('')
    table.string('type').notNullable().defaultTo('')
    table.string('season').notNullable().defaultTo('')
    table.integer('price').notNullable().defaultTo(0)
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('products')
}
