// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
let letter = [name, ...message]
return letter;

}

console.log(writeLoveLetter(["I", "Love", "You"], "Sush"));



function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    let updatedList = [puppyName, ...queue] //queue.unshift(puppyName)
    return updatedList;
  
}

console.log(addPuppy(["Tom","Jerry", "Spike"], "Max"));