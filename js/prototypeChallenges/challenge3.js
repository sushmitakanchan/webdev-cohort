function Counter(count) {
    // Initialize count property
    this.count = 0;
    this.increment = function(){
      return this.count = this.count+1;
    }
    this.decrement = function(){
      return this.count= this.count-1;
    }


}

const counter = new Counter(0)
console.log(counter.decrement());
