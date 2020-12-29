const expect = require('chai').expect
const Checkout = require('../checkout')

describe('Checkout cart', () => {
  it('Adds item price', () => {
    const checkout = new Checkout()
    checkout.addItemPrice('a', 1)
  })
})
