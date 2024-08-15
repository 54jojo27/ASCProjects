function randNumGenerator(integer) {
    let random = Math.floor(Math.random() * integer)
    return random
}

let randNum = randNumGenerator(10)

console.log(randNum)
function getTravelCount() {
    let random = randNumGenerator(101)
    return random
}
let runTravelCount = getTravelCount()
console.log(runTravelCount)