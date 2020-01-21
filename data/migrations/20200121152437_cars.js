
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('VIN').unique();
    tbl.string('make').notNullable;
    tbl.string('model').notNullable;
    tbl.integer('mileage').notNullable;
    tbl.string('transmission type')
    tbl.string('title status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
