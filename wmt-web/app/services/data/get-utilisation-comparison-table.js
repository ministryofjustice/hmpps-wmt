const getCaseloadUtilisationForPerson = require('./get-caseload-utilisation')

module.exports = function (user1Id, user2Id, year) {
  return getCaseloadUtilisationForPerson(user1Id, year).then(function (user1Utilisation) {
    return getCaseloadUtilisationForPerson(user2Id, year).then(function (user2Utilisation) {
      var comparisonTable = { headings: [], rows: [] }
       // TODO add id -> name lookup
      var rowToAdd = { label: "John Smith's Utilisation (%)", values: [] }

      user1Utilisation.forEach(function (result) {
        comparisonTable.headings.push(result['month'])
        rowToAdd.values.push(result['utilisation_percentage'])
      })
      comparisonTable.rows.push(rowToAdd)

       // TODO add id -> name lookup
      rowToAdd = { label: "Jane Smith's Utilisation (%)", values: [] }
      user2Utilisation.forEach(function (result) {
        rowToAdd.values.push(result['utilisation_percentage'])
      })
      comparisonTable.rows.push(rowToAdd)

      return comparisonTable
    })
  })
}
