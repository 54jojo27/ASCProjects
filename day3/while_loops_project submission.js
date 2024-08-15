let randInt1 = Math.floor(Math.random() * 11)
let randInt2 = Math.floor(Math.random() * 11)
let answer1 = randInt1
let answer2 = randInt2
while (answer1 != answer2){
    let randInt1 = Math.floor(Math.random() * 11)
    console.log("random number 1", answer1)
    let randInt2 = Math.floor(Math.random() * 11)
    console.log ("random number 2", answer2)
    if (answer1 == answer2) {
        break
    }

}
console.log("they're the same!")