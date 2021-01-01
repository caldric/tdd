const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const request = require('request')

const getUsers = require('../getUsers')

chai.should()
chai.use(sinonChai)

describe('Get users', () => {
  it('Calls the callback once', () => {
    const spy = sinon.spy()
    getUsers(spy)
    spy.should.have.been.calledOnce
  })

  it('Calls the correct URL', () => {
    const spy = sinon.spy()
    sinon.stub(request, 'get').callsFake((url, callback) => {
      callback({}, { body: '{"users": ["user1", "user2"]}' })
    })
    getUsers(spy)
    request.get.should.have.been.calledWith('https://www.mysite.com/api/users')
  })
})
