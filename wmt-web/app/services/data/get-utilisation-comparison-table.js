module.exports = function (user1Id, user2Id, year) {
  return {
    then: function (callback) {
      callback(
        {
          headings: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          rows: [
            {
              label: "Jane Smith's utilisation",
              values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
            },
            {
              label: "John Smith's utilisation",
              values: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
            }
          ]
        })
    }
  }
}
