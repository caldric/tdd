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

  it('Calculates the correct total from adding multiple items', () => {
    // Create item objects
    const firstItem = { name: 'a', price: 1 }
    const secondItem = { name: 'b', price: 2 }

    // Add items in checkout
    checkout.addItem(firstItem.name)
    checkout.addItem(secondItem.name)

    // Add item prices
    checkout.addItemPrice(firstItem.name, firstItem.price)
    checkout.addItemPrice(secondItem.name, secondItem.price)

    const total = checkout.calculateTotal()
    expect(total).to.equal(3)
  })
})
