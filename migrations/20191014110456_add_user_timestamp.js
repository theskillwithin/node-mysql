exports.up = function(knex) {
  return knex.schema.table("users", table => {
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", table => {
    table.dropTimestamps();
  });
};
