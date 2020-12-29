const expect = require('chai').expect
const Checkout = require('../checkout')

describe('Checkout cart', () => {
  it('Creates an instance of the Checkout class', () => {
    const checkout = new Checkout()
  })

  it('Adds item price', () => {
    const checkout = new Checkout()
    checkout.addItemPrice('a', 1)
  })
})
