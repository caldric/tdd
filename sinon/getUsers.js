const request = require('request')

module.exports = getUsers = (callback) => {
  request.get('https://www.mysite.com/api/users', (_, res) => {
    callback(JSON.parse(res.body))
  })
}
