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

  it('Calculates the current item price total', () => {
    checkout.addItemPrice('a', 1)
    const total = checkout.calculateTotal()
    expect(total).to.equal(1)
  })
})
