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
})
