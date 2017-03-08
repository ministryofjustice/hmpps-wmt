const tierTypes = require('../constants/tier-types')

class Tier {
  constructor (type, rank, points) {
    this.type = type
    this.rank = rank
    this.points = points
    this.isValid()
  }

  isValid() {
    // TODO: Implement generic validation handler a la APVS
    return true 
  }
}

module.exports = Tier
