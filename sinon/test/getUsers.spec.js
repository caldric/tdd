const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const request = require('request')
chai.should()
chai.use(sinonChai)

describe('Get users', () => {
  it('Is true', () => {
    expect(true).to.equal(true)
  })
})
