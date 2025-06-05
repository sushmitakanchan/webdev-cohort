const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffine: "low"
}

// console.log(`Name: ${teas.name}, Type: ${teas.type}`);

teas.origin = "China"
// console.log(teas);

teas.caffine = "medium"

delete teas.type;

// function check(teas){
//     if(teas.origin){
//         console.log("Origin exists");    
//     }
//     else{
//         console.log("Doesn't exists");
        
//     }
// }

// check(teas)

// 

for (let key in teas) {
    console.log(key + ":" + teas[key]);
    
}
//Nested object
const myTeas = {
    greenTea:{
        name: "Green tea",
        cups: {
            one:"1",
            two: "2"

        }
    },
    blackTea:{
        name: "Black tea"
    }
}

//COpy of the tea object
const teaCopy = {...myTeas} // shallow copy
console.log(teaCopy);


// console.log(teas);
