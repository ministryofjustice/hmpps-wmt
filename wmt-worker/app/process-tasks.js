const Promise = require('bluebird')
const config = require('../config')
const log = require('./services/log')
const statusEnum = require('./constants/task-status')
const getPendingTasksAndMarkInProgress = require('./services/data/get-pending-tasks-and-mark-in-progress')
const completeTaskWithStatus = require('./services/data/complete-task-with-status')
const getWorkerForTask = require('./services/get-worker-for-task')

module.exports = function () {
  var batchSize = parseInt(config.ASYNC_WORKER_BATCH_SIZE)

  return processTasks(batchSize).then(function () {
    return processTasks(batchSize)
  })
}

function processTasks (batchSize) {
  return getPendingTasksAndMarkInProgress(batchSize)
    .then(function (tasks) {
      log.info(`found ${tasks.length} tasks`)
      if (tasks.length === 0) { return }

      var promiseArray = []

      for (var task of tasks) {
        var worker = getWorkerForTask(task.type)

        if (worker) {
          promiseArray.push(executeWorkerForTaskType(worker, task))
        } else {
          log.info(`unable to find worker for task: ${task.type}`)
        }
      }

      return Promise.all(promiseArray)
    })
}

function executeWorkerForTaskType (worker, task) {
  log.info(`started task: ${task.id}-${task.type}`)

  return worker.execute(task)
    .then(function () {
      log.info(`completed task: ${task.id}-${task.type}`)
      return completeTaskWithStatus(task.id, statusEnum.COMPLETE)
    }).catch(function (error) {
      log.error(`error running task: ${task.id}-${task.type}, error: ${error}`)
      log.error({error: error})
      return completeTaskWithStatus(task.id, statusEnum.FAILED)
    })
}
