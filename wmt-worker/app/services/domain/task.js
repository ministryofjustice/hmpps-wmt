
class Task {
  constructor (taskId, taskType, additionalData, dateCreated, dateProcessed, status) {
    this.id = taskId
    this.type = taskType
    this.additionalData = additionalData
    this.dateCreated = dateCreated
    this.dateProcessed = dateProcessed
    this.status = status
  }
}

module.exports = Task