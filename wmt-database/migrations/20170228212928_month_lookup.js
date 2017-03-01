
exports.up = function(knex, Promise) {
    return knex.schema.createTable('month_lookup', function (table) {
        table.increments('id').primary();
        table.integer('ordinal_value');
        table.integer('year');
    }).catch(function (error) {
        console.log(error);
        throw error
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('month_lookup'); 
};
