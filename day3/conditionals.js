let userGuess = process.argv[2];
let answer = 5;

if (userGuess == answer){
console.log("correct guess!")}

else if (userGuess < answer){
console.log("higher!")}

else if (userGuess > answer){
console.log("lower!")}
