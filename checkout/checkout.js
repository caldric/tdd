module.exports = class Checkout {
  constructor() {
    this.items = []
  }

  addItem(name, price) {
    const newItem = { name, price }
    this.items.push(newItem)
  }

  calculateTotal() {
    return this.items.reduce((total, { price }) => total + price, 0)
  }
}
