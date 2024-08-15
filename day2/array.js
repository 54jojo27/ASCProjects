let favoriteSnacks = ["Kit kat", // index 0
"Kettle corn",  //index 1
"Popcorn", // index 2
"Peanuts", // index 3
"Reeses"]; // index 4

let firstElement = favoriteSnacks[0]
console.log(firstElement)

let secondElement = favoriteSnacks[1]
console.log(secondElement)

let thirdElement = favoriteSnacks[2]
console.log(thirdElement)

let fourthElement = favoriteSnacks[3]
console.log(fourthElement)

let fifthElement = favoriteSnacks[4]
console.log(fifthElement)

let mixArray = ["America", 7.4, true, [0, 1, 2]];
console.log(mixArray);

console.log(mixArray[3][1]) //this gets to the 1 inside of the dual array
console.log(mixArray.length)

mixArray.push("RAAAAAGHHHHHH") //adds another item to the end of the array
console.log(mixArray)

console.log(mixArray[mixArray.length - 1]) // this gives the last element (the scream)

mixArray.pop(); //doesn't take an argument, removes the LAST item of an array (the scream)
console.log(mixArray)