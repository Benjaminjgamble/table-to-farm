exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('product_name').notNullable().defaultTo('')
    table.string('image').defaultTo('')
    table.string('type').notNullable().defaultTo('')
    table.boolean('in_season').notNullable().defaultTo(true)
    table.string('description').defaultTo('')
    table.integer('price').defaultTo(0)
    table.integer('farm_id').references('farms.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('products')
}
