const passport = require('passport')

module.exports = function (router) {
  router.post('/login/callback',
    passport.authenticate('saml'), function (req, res) {
      return res.redirect('/')
    })
  router.get('/login',
    passport.authenticate('saml'), function (req, res) {
      return res.redirect('/')
    })
}
