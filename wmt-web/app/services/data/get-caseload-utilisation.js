const config = require('../../../knexfile').extweb
const knex = require('knex')(config)

module.exports = function (userId) {
  return knex('caseload_utilisation')
    .where({'user_id': userId})
}
