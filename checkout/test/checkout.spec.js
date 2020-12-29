const expect = require('chai').expect
const Checkout = require('../checkout')

describe('Checkout cart', () => {
  let checkout

  beforeEach(() => {
    checkout = new Checkout()
  })

  it('Calculates the current item price total', () => {
    const newItem = { name: 'a', price: 1 }
    checkout.addItem(newItem.name)
    checkout.addItemPrice(newItem.name, newItem.price)
    const total = checkout.calculateTotal()
    expect(total).to.equal(1)
  })
})
