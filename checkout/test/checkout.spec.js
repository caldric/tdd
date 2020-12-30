const expect = require('chai').expect
const Checkout = require('../checkout')

describe('Checkout cart', () => {
  let checkout

  beforeEach(() => {
    checkout = new Checkout()
  })

  it('Calculates the current item price total', () => {
    // Create item
    const newItem = { name: 'a', price: 1 }

    // Add item to checkout
    checkout.addItem(newItem.name, newItem.price)

    // Create assertion
    const total = checkout.calculateTotal()
    expect(total).to.equal(1)
  })

  it('Calculates the correct total from adding multiple items', () => {
    // Create item objects
    const items = [
      { name: 'a', price: 1 },
      { name: 'b', price: 2 },
    ]

    // Add items in checkout
    for (const item of items) {
      const { name, price } = item
      checkout.addItem(name, price)
    }

    // Create assertion
    const total = checkout.calculateTotal()
    expect(total).to.equal(3)
  })

  it('Adds discount rule', () => {
    checkout.addDiscount('a', 3, 2)
  })

  it('Applies discount item prices to the total', () => {
    // Add discounted items to checkout
    checkout.addDiscount('a', 3, 2)

    // Create assertion
    const total = checkout.calculateTotal()
    expect(total).to.equal(2)
  })

  it('Throws an error when an item is added with no price', () => {
    expect(() => checkout.addItem('a')).to.throw()
  })
})
