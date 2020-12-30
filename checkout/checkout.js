module.exports = class Checkout {
  constructor() {
    this.items = []
  }

  addItem(name, price) {
    if (price === undefined) throw new Error('No price defined for item')
    this.items.push({ name, price })
  }

  calculateTotal() {
    return this.items.reduce((total, { price }) => total + price, 0)
  }

  addDiscount(itemName, qty, totalPrice) {
    for (let i = 0; i < qty; i++) {
      this.items.push({ name: itemName, price: totalPrice / qty })
    }
  }
}
