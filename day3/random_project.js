// let randDecimal = Math.random();
// randDecimal is a  number between 0 and 0.9

// let randNum = randDecimal * 5;
//randNum is any number between 0 and 4.9

// let randInt = Math.floor(randNum);

// console.log("randInt:", randInt);

// let randInt1 = Math.floor(Math.random() * 11)
// let answer1 = randInt1
// console.log("random number 1", answer1)

// let randInt2 = Math.floor(Math.random() * 11)
// let answer2 = randInt2
// console.log ("random number 2", answer2)

// let sum = answer1 += answer2
// console.log("sum:", sum)

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];


let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randDecimal = Math.random()
let randNum = randDecimal * days.length
let randDay = Math.floor(randNum)


let randdecimal = Math.random()
let randnum = randdecimal * reactions.length
let randReaction = Math.floor(randnum)
console.log("your lucky day is...", days[randDay],"!", reactions[randReaction])