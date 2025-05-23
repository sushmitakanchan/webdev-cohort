function Animal(name) {
    // Initialize name property
      this.name = name;
      this.makeSound = function(){
        console.log("Some generic sound")
      };
    }



const a1 = new Animal("Leo")
a1.makeSound();