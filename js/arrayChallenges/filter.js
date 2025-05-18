function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    for(let i=0; i< foodList.length; i++){
        if(foodList[i] === "Burger"){
            let index = foodList.indexOf("Burger");
            if(index != -1){
                foodList.splice(index, 1)
            }
          }
    }
    return foodList;

    //SOLUTION 2:
    // return foodList.filter(item=> item!=="Burger")

}

console.log(filterHealthy(["Salad", "Burger", "Chicken"]));