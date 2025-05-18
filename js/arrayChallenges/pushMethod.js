function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
   let newGuestList = guestList.push(newGuest)
   return guestList;
}
// console.log(addGuest(["Anirudh", "Mukul"],["Radhika"]));