var taskTypes = require('../constants/task-type')
var calculateWorkloadPoints = require('./workers/calculate-workload-points')

// ALL WORKERS SHOULD HAVE A METHOD `execute(task)` that returns a Promise
module.exports = function (taskType) {
  switch (taskType) {
    case taskTypes.CALCULATE_WORKLOAD_POINTS: return calculateWorkloadPoints
  }

  return null
}
