exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("username", 45).notNullable();
    table.string("email", 255).notNullable();
    table.integer("role_id").unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
