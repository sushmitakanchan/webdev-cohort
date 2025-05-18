// You just need to implement the findPhone function
function findPhone(items) {
    // Return the index of "Phone" in the items array
    let index = items.indexOf("Phone");
    return index;
}

console.log(findPhone(["Wallet", "Keys", "Phone"]));