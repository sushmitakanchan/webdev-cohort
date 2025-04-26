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
  
  