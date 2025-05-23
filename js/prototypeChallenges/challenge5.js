function ShoppingCart() {
    // Initialize items property
    this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){
    if (Array.isArray(price)) {
        this.items.push(...price); // Spread the array into individual values
    } else {
        this.items.push(price);
    }
    return this.items;
};



// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){
    let total = 0;
    for(let p in this.items){
        total += this.items[p]
    }
    return total;

}

const price = new ShoppingCart()
console.log(price.addItem([1,2,3])
);

console.log(price.getTotalPrice());

