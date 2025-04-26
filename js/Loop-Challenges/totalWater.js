function totalWater(waterAmounts) {
    let total = 0;
    for(let i=0; i<waterAmounts.length; i++){
        total += waterAmounts[i];
    }
    return total;
  }

//   console.log(totalWater([1,2,3,4]));


//USING REDUCE

  function totalWater(waterAmounts) {
    return waterAmounts.reduce((total, amount) => total + amount, 0);
  }
  
  console.log(totalWater([1,2,3,4]));