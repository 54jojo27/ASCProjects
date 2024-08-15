function randNumGenerator(integer) {
    let random = Math.floor(Math.random() * integer)
    return random
}

let randNum = randNumGenerator(10)

function getHome() {
    let houses = ["cabin", "mansion", "townhouse", "apartment", "RV", "condo",]
    let randDecimal = Math.random()
    let randNum = randDecimal * houses.length
    let randHouse = Math.floor(randNum)
    let mashHouse = houses[randHouse]
    return mashHouse
}
let runHouse = getHome()

function getTravelCount() {
    let random = randNumGenerator(101)
    return random
}
let runTravelCount = getTravelCount()

function getPet() {
    let pets = ["dog", "cat", "bird", "lizard", "fish", "pokemon"]
    let randDecimal = Math.random()
    let randNum = randDecimal * pets.length
    let randPet = Math.floor(randNum)
    let mashPet = pets[randPet]
    return mashPet
}
let runPet = getPet()

function getJob() {
    let jobs = ["assassin", "9-5 worker", "teacher", "businessman", "food reviewer", "real estate agent"]
    let randDecimal = Math.random()
    let randNum = randDecimal * jobs.length
    let randJobs = Math.floor(randNum)
    let mashJobs = jobs[randJobs]
    return mashJobs
}
let runJobs = getJob()

function mash() {
    return "You will live in a " + runHouse + ", travel to " + runTravelCount + 
    " countries, own a " + runPet + ", and make money as a " + runJobs + "!"
}
let runmash = mash()

console.log(runmash)