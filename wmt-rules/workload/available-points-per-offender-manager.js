const offenderManagerTypes = require('./constants/offender-manager-types')
const _ = require('lodash')

module.exports = function (offenderManagerTypeId, contractedHours,
        nominalTarget, hoursReduction, defaultHoursLookup) {
  if (_.isNull(defaultHoursLookup) || _.isNull(offenderManagerTypeId) ||
            _.isNull(nominalTarget)) {
    return 0
  }

  if (_.includes(offenderManagerTypes.EXEMPT_IDS, offenderManagerTypeId)) {
    return 0
  }

  if (_.includes(offenderManagerTypes.PSO_IDS, offenderManagerTypeId)) {
    var defaultHours = defaultHoursLookup.PSO
  } else {
    var defaultHours = defaultHoursLookup.PO
  }

  if (contractedHours == null) {
    contractedHours = defaultHours
  }

  actualHours = contractedHours - hoursReduction

  return nominalTarget *
        (contractedHours / defaultHours) *
        (actualHours / contractedHours)
}
