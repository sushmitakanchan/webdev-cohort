// function distributeGifts(totalGifts, friends) {
//     // write your code here
//     if(totalGifts < friends){
//       return totalGifts;
//     }
//     for(let i = 0; i < friends; i++){
//       totalGifts--;
//     }
//     return totalGifts;
//   }

// CHALLENGE 1
  function distributeGifts(totalGifts, friends) {
    // write your code here
    let giftsGiven = 0;
    for(let i=0; i< friends; i++){
      if(totalGifts > 0){
        giftsGiven++;
        totalGifts--;
      }
    }
    return giftsGiven;
  }
  console.log(distributeGifts(3,5));
  
  // CHALLENGE 2
  // console.log((Math.floor(17/3)));

function countBoxes(totalBars, barsPerBox) {
  let boxes = 0;
  for(let i=0; i < totalBars; i++){
    boxes = Math.floor(totalBars/barsPerBox);
    
  }
  return boxes;

}
console.log(countBoxes(17, 5));

// CHALLENGE 3
function countApples(apples) {
  let count = 0;
for(let i=0; i < apples; i++){
   count++;

}
return count;
}

console.log(countApples(5));

// CHALLLENGE 4
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

// CHALLENGE 5
function countSteps(targetSteps) {
  let stepstaken = 0;
  while(stepstaken < targetSteps){
    stepstaken++;
  }
  return targetSteps;
  
}

console.log(countSteps(5));

// CHALLENGE 6
function workingDays(days) {
  // your code here
  let workingDays = 0;
  for(let i = 0; i<days.length; i++){
    if(days[i] != "Saturday" && days[i] != "Sunday"){
      workingDays++;
    }
  }
  return workingDays;
}

console.log(workingDays(["Monday", "Tuesday","Sunday"]));

// CHALLENGE 7
// function totalStars(starLevels) {
//     let count = 0;
//     for(let item of starLevels){
//       if(Array.isArray(item)){
//         count+=totalStars(item)
//       }
//       else{
//         count++;
//       }
//     }
//   return count;
//   }

function totalStars(starLevels){
  let count = 0;
  for(let i=0; i<starLevels.length; i++){
      count+=starLevels[i].length;
  }
  return count;
}

console.log(totalStars([["*", "*" , "*"], ["*", "*"], ["*"]]));

let arr = [["*", "*" , "*"], ["*", "*"], ["*"]];
console.log(arr.length);


// CHALLENGE 8
function totalPrice(prices) {
  return prices.reduce((item, price)=>(item+price),0)
}

console.log(totalPrice([1.5, 2.3, 3.7]));
console.log(totalPrice([5,10,15]))



