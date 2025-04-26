// console.log((Math.floor(17/3)));

function countBoxes(totalBars, barsPerBox) {
    let boxes = 0;
    for(let i=0; i < totalBars; i++){
      boxes = Math.floor(totalBars/barsPerBox);
      
    }
    return boxes;
  
  }
  console.log(countBoxes(17, 5));
  
  