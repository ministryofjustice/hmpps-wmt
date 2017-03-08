const config = require('../../../knexfile').development
const knex = require('knex')(config)

module.exports = function (taskId, status) {
  return knex('tasks').where('id', taskId)
  .update({
    'status': status,
    'date_processed': new Date()
  })
}
