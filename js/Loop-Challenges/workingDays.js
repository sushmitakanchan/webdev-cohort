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
  