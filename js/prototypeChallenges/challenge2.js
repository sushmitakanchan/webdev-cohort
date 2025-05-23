function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name;
    this.batteryLevel = batteryLevel;
    this.charge = function(){
    this.batteryLevel += 20;
      if (this.batteryLevel < 100){
        return this.batteryLevel;
      }
      else{
        return this.batteryLevel = 100;
      }
    }

}

const r1 = new Robot("Puneetpie", 90)
console.log(r1.charge());