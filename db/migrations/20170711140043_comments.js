exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments()
    table.string('comment').notNullable().defaultTo('')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('product_id').references('products.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('comments')
}
