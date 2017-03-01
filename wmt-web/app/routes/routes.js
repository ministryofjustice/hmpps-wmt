/** * This file defines all routes used in this application. Any logic that is
 * applicable to all routes can be added here.
 */

var routes = [
  require('./index'),
  require('./caseload-utilisation')
]

module.exports = function (router) {
  routes.forEach(function (route) {
    route(router)
  })
}
