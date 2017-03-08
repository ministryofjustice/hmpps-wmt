
class Task {
  constructor (taskId, agent, taskType, additionalData, dateCreated, dateProcessed, status) {
    this.id = taskId
    this.submittingAgent = agent
    this.type = taskType
    this.additionalData = additionalData
    this.dateCreated = dateCreated
    this.dateProcessed = dateProcessed
    this.status = status
  }
}

module.exports = Task
