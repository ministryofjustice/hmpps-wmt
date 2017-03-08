const config = require('./config')
const log = require('./app/services/log')
var CronJob = require('cron').CronJob
var processTasks = require('./app/process-tasks')

var asyncWorkerCron = config.ASYNC_WORKER_CRON

var asyncWorkerJob = new CronJob({
  cronTime: asyncWorkerCron,
  onTick: function () {
    runProcessTasks()
  },
  onComplete: function () {
    log.info('WMT worker completed running task')
  },
  start: false
})
log.info('Started WMT worker')
asyncWorkerJob.start()

function runProcessTasks () {
  return processTasks().then(function () {
    log.info(`WMT worker completed running task`)
  })
}
