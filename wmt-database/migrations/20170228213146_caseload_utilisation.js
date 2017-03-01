
exports.up = function(knex, Promise) {
    return knex.schema.createTable('caseload_utilisation', function (table) {
        table.integer('user_id');
        table.integer('utilisation_percentage');
        table.integer('month_id');
        table.foreign('user_id').references('users.id').onDelete("CASCADE");
        table.foreign('month_id').references('month_lookup.id').onDelete("CASCADE");
    }).catch(function (error) {
        console.log(error);
        throw error;
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('caseload_utilisation');
};
