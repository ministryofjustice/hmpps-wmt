const config = require('../../../knexfile').development
const knex = require('knex')(config)

module.exports = function (userId, year) {
    return knex('caseload_utilisation')
        .select('utilisation_percentage')
        .join('month_lookup', 'month_id', '=', 'month_lookup.id')
        .where({'user_id': userId, 'year' : year })
        .orderBy('ordinal_value', 'asc')
}
