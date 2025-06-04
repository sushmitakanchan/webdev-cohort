// signature: returns new array, takes input as userfn
// agar user ka function True return krta h toh vo current ko new array me include kr leta h
const arr = [1,2,3,4,5,6]

if(!Array.prototype.myFilter){
    (Array.prototype.myFilter) = function(userFn){
        const result = []
        for(let i=0; i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i])
            }
        }

        return result
    }
}

const n3 = arr.myFilter((e)=>e%2===0)
console.log(n3);
