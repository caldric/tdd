const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const request = require('request')

const getUsers = require('../getUsers')

chai.should()
chai.use(sinonChai)

describe('Get users', () => {
  let spy

  beforeEach(() => {
    spy = sinon.spy()
    sinon.stub(request, 'get').callsFake((_, callback) => {
      callback({}, { body: '{"users": ["user1", "user2"]}' })
    })
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Calls the callback once', () => {
    getUsers(spy)
    spy.should.have.been.calledOnce
  })

  it('Calls the correct URL', () => {
    getUsers(spy)
    request.get.should.have.been.calledWith('https://www.mysite.com/api/users')
  })

  it('Returns correct data', () => {
    getUsers(spy)
    spy.should.have.been.calledWith({ users: ['user1', 'user2'] })
  })
})
