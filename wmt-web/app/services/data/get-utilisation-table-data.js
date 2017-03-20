const getCaseloadUtilisation = require('./get-caseload-utilisation')

module.exports = function (userId, year) {
  return getCaseloadUtilisation(userId, year).then(function (results) {
    var utilisationTable = {}
    utilisationTable.headings = []
    utilisationTable.values = []

    results.forEach(function (result) {
      utilisationTable.headings.push(result['month'])
      utilisationTable.values.push(result['utilisation_percentage'])
    })
    return utilisationTable
  })
}
