const config = require('../config')

function isAuthenticated (req) {
  if (!req.user) {
    var error = new Error('unauthenticated')
    error.status = 401
    throw error
  }
}

function isAdmin (req) {
  if (!config.AUTHENTICATION_ENABLED) return
  isAuthenticated(req)

  if (!req.user.user_roles.includes('admin')) {
    var error = new Error('unauthorised')
    error.status = 403
    throw error
  }
}

module.exports.isAuthenticated = isAuthenticated
module.exports.isAdmin = isAdmin
