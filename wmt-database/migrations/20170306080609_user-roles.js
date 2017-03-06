
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_roles', function (table) {
      table.integer('user_id');
      table.string('role');
      table.foreign('user_id').references('users.id').onDelete("CASCADE");
  }).catch(function (error) {
      console.log(error);
      throw error;
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('user_roles');
};
