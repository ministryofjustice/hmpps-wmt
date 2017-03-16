
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id')
    table.string('submitting_agent')
    table.string('type')
    table.text('additional_data', 1300)
    table.dateTime('date_created').notNullable()
    table.dateTime('date_processed')
    table.string('status', 20).notNullable()
  }).catch(function (error) {
      console.log(error)
      throw error
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('tasks')
}
