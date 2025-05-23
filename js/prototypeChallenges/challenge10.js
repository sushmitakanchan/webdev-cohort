// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
    // Initialize name, price, and stock properties
    this.name = name,
    this.price = Number(price),
    this.stock = Number(stock)
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(percent){
  this.price = Math.round(this.price - this.price * (percent/100))
  return this.price
}

// Define purchase method on Product's prototype
Product.prototype.purchase = function(quantity){
  if(quantity > this.stock || this.stock === 0){
    return "Not enough stock"
  }else{
    this.stock -= quantity;
    return this.stock
  }
}

const p = new Product("laptop", 50000, 5)
console.log(p.applyDiscount(10));
console.log(p.purchase(3));

