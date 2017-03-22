const Tier = require('./workload/domain/tier')
const aggregateTierPoints = require('./workload/aggregate-tier-points')
const _ = require('lodash')

module.exports = calculateWorkloadPoints

function calculateWorkloadPoints (orgUnit, orgUnitWorkloads, wmtWeightings) {
  var orgUnit = orgUnit
  var workloads = orgUnitWorkloads
  var weightings = wmtWeightings
  var workloadPoints = calculateWorkloadPoints(workloads, weightings)

  // Module API
  return {
    orgUnit: orgUnit,
    workloads: workloads,
    weightings: weightings,
    workloadPoints: workloadPoints
  }

  // Business rules encapsulated in private functions calling
  // workload/specific-rule-module
  function calculateWorkloadPoints (workloads, weightings) {
    var points = []
    _.each(workloads, (workload) => {
      var tiers = []
      _.each(workload.tiers, (tier) => {
        tiers.push(new Tier(tier.type, tier.rank, tier.points))
      })
      points.push(aggregateTierPoints(tiers))
    })
    return points
  }
}
