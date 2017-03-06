exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email')
    }).catch(function (error) {
        console.log(error);
        throw error
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('users');
};
