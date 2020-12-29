const expect = require('chai').expect
const Checkout = require('../checkout')

describe('Checkout cart', () => {
  let checkout

  beforeEach(() => {
    checkout = new Checkout()
  })

  it('Adds item price', () => {
    checkout.addItemPrice('a', 1)
  })

  it('Adds an item', () => {
    checkout.addItem('a')
  })
})
