if(!Array.prototype.myforEach){
    (Array.prototype.myforEach) = function(userFn){
        let originalArr = this
        for( let i =0 ; i<this.length; i++){
            userFn(originalArr[i], i)
        }
    }
}

const arr = [1,2,3,4,5,6]

// Error: .forEach function does not exist on arr variable

// Real signature: NO return, takes function as input and value and index as parameter
// calls my fn for every value

const ret = arr.myforEach(function(value, index){
    console.log(`My forEach value of ${value} is ${index}`);
})

console.log(ret);
