const request = require('request')

module.exports = getUsers = (callback) => {
  request.get('https://www.mysite.com/api/users', (err, res) => {})
  if (typeof callback === 'function') callback()
}
