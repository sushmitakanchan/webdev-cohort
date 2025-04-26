function totalPrice(prices) {
    return prices.reduce((item, price)=>(item+price),0)
  }

console.log(totalPrice([1.5, 2.3, 3.7]));
console.log(totalPrice([5,10,15]))
