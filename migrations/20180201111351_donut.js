
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Donut', table => {
    table.increments()
    table.string('type').notNullable()
    table.integer('price').notNullable()
    table.string('brand').notNullable()
    table.integer('rating').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Donut')
};
