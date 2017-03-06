const getCaseloadUtilisation = require('../services/data/get-caseload-utilisation')
const authorisation = require('../authorisation')

module.exports = function (router) {
  router.get('/my-utilisation/', function (req, res, next) {
    console.log(req.user)
    authorisation.isAdmin(req)

    // When the user session stories are played the user id will be attached
    // to the req or res object
    var myUserId = 1
    var year = 2016
    getCaseloadUtilisation(myUserId, year).then(function (utilisations) {
      return res.render('my-utilisation', {
        utilisations: utilisations
      })
    })
  })
}
