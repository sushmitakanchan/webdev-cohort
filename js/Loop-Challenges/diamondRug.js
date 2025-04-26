
    function shinyDiamondRug(n) {
        // Step 1: Check if input is valid
        if (typeof n !== "number" || n <= 0) {
            console.log("Please enter a positive number.");
            return;
        }
    
        let result = ""; // To store the full diamond as a string
    
        // Step 2: Upper part (including middle)
        for (let i = 1; i <= n; i++) {
            let spaces = "";  // Leading spaces
            let stars = "";   // Stars for the current line
    
            // Add spaces before stars
            for (let s = 1; s <= n - i; s++) {
                spaces += " ";
            }
    
            // Add stars (odd numbers: 1, 3, 5, ...)
            for (let s = 1; s <= 2 * i - 1; s++) {
                stars += "*";
            }
    
            result += spaces + stars + "\n"; // Add the full line and newline
        }
    
        // Step 3: Lower part
        for (let i = n - 1; i >= 1; i--) {
            let spaces = "";
            let stars = "";
    
            // Add spaces before stars
            for (let s = 1; s <= n - i; s++) {
                spaces += " ";
            }
    
            // Add stars (odd numbers decreasing)
            for (let s = 1; s <= 2 * i - 1; s++) {
                stars += "*";
            }
    
            // Only add newline if it's not the last line
            result += spaces + stars;
            if (i !== 1) {
                result += "\n";
            }
        }
    
        // Step 4: Print the final result
        console.log(result);
    }
    

    


// function shinyDiamondRug(n) {
//     let totalRows = 2 * n - 1;
//     for(let row = 1; row <= totalRows; row++ ){
//       let numSpaces;
//       let numStars;
//       if(row <= n){
//         numStars = 2 * row - 1;
//         numSpaces = n - row;
//       }else{
//         let reverseRow = totalRows - row + 1;
//         numStars = 2 * reverseRow - 1;
//         numSpaces = n - reverseRow;
//       }
//       let line = "";
//       for (let s = 0; s < numSpaces; s++) {
//               line += " ";
//           }
  
//           // Add stars
//           for (let s = 0; s < numStars; s++) {
//               line += "*";
//           }
//           console.log(line)
//     }
    
//   }

shinyDiamondRug(3)  