function hasDiscount(product) {
    // Check if product has discount property
    return (product.hasOwnProperty("discount")) ? true : false
  }

  const p1 = { brand: "Toyota", model: "Camry" };
  console.log(hasDiscount(p1));
  