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

  addDiscount(itemName, qty, totalPrice) {
    for (let i = 0; i < qty; i++) {
      const newItem = { name: itemName, price: totalPrice / qty }
      this.items.push(newItem)
    }
  }
}
