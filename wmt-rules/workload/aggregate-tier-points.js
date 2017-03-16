const tierTypes = require('./constants/tier-types')
const tierRanks = require('./constants/tier-ranks')
const _ = require('lodash')

/*
* Example module to illustrate implementing a calculation/business rule
*/
module.exports = function (tiers) {
  return {
    communityPoints: sumTierType(tiers, tierTypes.COMMUNITY),
    licensePoints: sumTierType(tiers, tierTypes.LICENSE),
    custodyPoints: sumTierType(tiers, tierTypes.CUSTODY)
  }

  function sumTierType(tiers, tierType) {
    return _(tiers).filter(t => t.type == tierType)
                  .map(t => t.points)
                  .sum()
  }
}
