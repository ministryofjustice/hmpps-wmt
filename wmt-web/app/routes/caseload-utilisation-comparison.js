const getUtilisationComparisonTable = require('../services/data/get-utilisation-comparison-table')
const authorisation = require('../authorisation')

module.exports = function (router) {
  router.get('/compare-utilisation/', function (req, res, next) {
    authorisation.isAdmin(req)
    var om1id = 1
    var om2id = 2
    var year = 2016
    getUtilisationComparisonTable(om1id, om2id, year).then(function (utilisationTable) {
      return res.render('compare-utilisation', {
        utilisationTable: utilisationTable
      })
    })
  })
}
