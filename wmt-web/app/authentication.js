// Configure login mechanism
const passport = require('passport')

var SamlStrategy = require('passport-saml').Strategy

module.exports = function (app) {
  passport.serializeUser(function (user, done) {
    done(null, {name: user['http://schemas.microsoft.com/identity/claims/displayname']})
  })

  passport.deserializeUser(function (name, done) {
    done(null, {name: name})
  })

  app.use(passport.initialize())

  passport.use(new SamlStrategy(
    {
      path: '/login/callback',
      entryPoint: 'https://login.windows.net/1a0ac0a5-7c5c-41b6-8530-c30fc060cd6c/saml2',
      issuer: 'http://localhost:3000/login'
    },
        function (profile, done) {
          return done(null, profile)
        })
    )
}
