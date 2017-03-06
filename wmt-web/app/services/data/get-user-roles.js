const config = require('../../../knexfile').development
const knex = require('knex')(config)

module.exports = function (email) {
  return knex('users')
    .select('users.email', 'user_roles.role')
    .join('user_roles', 'id', '=', 'user_roles.user_id')
    .where('email', email)
    .then(function (results) {
      var roles = []
      results.forEach(function (result) {
        roles.push(result['role'])
      })
      return roles
    })
}
