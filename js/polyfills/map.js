// signature: returns new arr, each element k upr iterate krta h, userFn k hisab se new arr me return krta h
const arr = [1,2,3,4,5,6]

if(!Array.prototype.myMap){
    (Array.prototype.myMap)= function(userFn){
        const result = []
        for(let i=0; i<this.length;i++){
           const value = userFn(this[i],i)
           result.push(value)
        }

        return result
    }
}

const n = arr.map((e)=> e*2)
const n2 = arr.myMap((e)=> e*3)

console.log(n);
console.log(arr);
console.log(n2);


