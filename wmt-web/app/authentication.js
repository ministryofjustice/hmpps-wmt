// Configure login mechanism
const passport = require('passport')
const session = require('express-session')
const config = require('../config')
const getRoles = require('./services/data/get-user-roles')

var SamlStrategy = require('passport-saml').Strategy

module.exports = function (app) {
  passport.serializeUser(function (user, done) {
    var email = user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    var displayName = user['http://schemas.microsoft.com/identity/claims/displayname']
    console.log(user)
    getRoles(email).then(function (roles) {
      done(null, {
        name: displayName,
        email: email,
        user_roles: roles
      })
    })
  })

  passport.deserializeUser(function (user, done) {
    done(null, {
      name: user.name,
      email: user.email,
      user_roles: user.user_roles
    })
  })

  var sessionOptions = {
    secret: config.SESSION_SECRET,
    cookie: {}
  }

  app.use(session(sessionOptions))
  app.use(passport.initialize())
  app.use(passport.session())

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

  app.use(function (req, res, next) {
    if (req.user) {
      res.locals.user = req.user
    }
    next()
  })
}
