const Promise = require('bluebird').Promise
const calculateWorkloadPoints = require('wmt-rules')
const logger = require('../log')

const ORG_UNIT = 'medway'
const WORKLOAD_POINTS = require('../../../data/test-workloads')
const WMT_WEIGHTINGS = {}

module.exports.execute = function (task) {
  var results = calculateWorkloadPoints(ORG_UNIT, WORKLOAD_POINTS, WMT_WEIGHTINGS)
  logger.info(`Logging results of dummy calculation for ORG = ${ORG_UNIT}`)
  logger.info(results)
  return Promise.resolve(results)
}
