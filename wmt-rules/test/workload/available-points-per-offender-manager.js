const assert = require('assert')
const availablePointsPerOffenderManager = require('../../workload/available-points-per-offender-manager')

describe('available-points-per-offender-manager', function () {
  const nominalTarget = 1000
  const defaultHoursLookup = {
    PO: 37,
    PSO: 35
  }

  describe('happy path', function () {
    it('should return 0 when offender manager type id is 4', function () {
      var result = availablePointsPerOffenderManager(4, null, null, null,
                    defaultHoursLookup)
      var expected = 0
      assert.equal(expected, result)
    })

    it('should return 0 when offender manager type id is 5', function () {
      var result = availablePointsPerOffenderManager(4, null, null, null,
                    defaultHoursLookup)
      var expected = 0
      assert.equal(expected, result)
    })

    it('should return nominal target when defaults are used', function () {
      var result = availablePointsPerOffenderManager(1, null, nominalTarget, 0,
                    defaultHoursLookup)
      var expected = nominalTarget
      assert.equal(expected, result)
    })

    it('should return twice the nominal target when a PO is contracted for twice as much as the default', function () {
      var contractedHours = defaultHoursLookup.PO * 2

      var expected = nominalTarget * 2
      var result = availablePointsPerOffenderManager(1, contractedHours,
                        nominalTarget, 0, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return twice the nominal target when a PSO is contracted for twice as much as the default', function () {
      var contractedHours = defaultHoursLookup.PSO * 2

      var expected = nominalTarget * 2
      var result = availablePointsPerOffenderManager(2, contractedHours,
                        nominalTarget, 0, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return half the nominal target when a PO is contracted for half as much as the default', function () {
      var contractedHours = defaultHoursLookup.PO / 2

      var expected = nominalTarget / 2
      var result = availablePointsPerOffenderManager(1, contractedHours,
                        nominalTarget, 0, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return half the nominal target when a PSO is contracted for half as much as the default', function () {
      var contractedHours = defaultHoursLookup.PSO / 2

      var expected = nominalTarget / 2
      var result = availablePointsPerOffenderManager(2, contractedHours,
                        nominalTarget, 0, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return half the nominal target when a PO is reduced by half as much as the default', function () {
      var hoursReduction = defaultHoursLookup.PO / 2

      var expected = nominalTarget / 2
      var result = availablePointsPerOffenderManager(1, null, nominalTarget,
                        hoursReduction, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return half the nominal target when a PSO is reduced by half as much as the default', function () {
      var hoursReduction = defaultHoursLookup.PSO / 2

      var expected = nominalTarget / 2
      var result = availablePointsPerOffenderManager(2, null, nominalTarget,
                        hoursReduction, defaultHoursLookup)

      assert.equal(expected, result)
    })
  })
  describe('null checking', function () {
    var expected = 0

    it('should return zero when defaultHoursLookup is null', function () {
      var hoursReduction = defaultHoursLookup.PSO
      var result = availablePointsPerOffenderManager(2, null, nominalTarget,
                    hoursReduction, null)

      assert.equal(expected, result)
    })

    it('should return zero when OM Type ID is null', function () {
      var hoursReduction = defaultHoursLookup.PSO
      var result = availablePointsPerOffenderManager(null, null, nominalTarget,
                    hoursReduction, defaultHoursLookup)

      assert.equal(expected, result)
    })

    it('should return zero when nominal targets null', function () {
      var hoursReduction = defaultHoursLookup.PSO
      var result = availablePointsPerOffenderManager(null, null, nominalTarget,
                    hoursReduction, defaultHoursLookup)

      assert.equal(expected, result)
    })
  })
})
