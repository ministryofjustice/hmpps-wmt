const config = require('../../../knexfile').development
const knex = require('knex')(config)
const taskStatus = require('../../constants/task-status')
const Task = require('../domain/task')

module.exports = function (schema, batchSize) {
  return knex.select().table('tasks')
    .where('status', taskStatus.PENDING)
    .orderBy('date_created', 'asc')
    .limit(batchSize)
    .then(function (results) {
      var tasks = []
      var ids = []
      if (results !== 'undefined' && results.length > 0) {
        for (var result of results) {
          ids.push(result.id)
          tasks.push(new Task(
            result.id,
            result.submitting_agent,
            result.type,
            result.additional_data,
            result.date_created,
            result.date_processed,
            taskStatus.INPROGRESS))
        }
      } else {
        return []
      }
      return knex('tasks').whereIn('id', ids)
        .update('status', taskStatus.INPROGRESS)
        .then(function () {
          return tasks
        })
    })
}
