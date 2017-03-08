var Promise = require('bluebird').Promise

module.exports.execute = function (task) {
  return Promise.resolve(`${task} completed!`)
}
