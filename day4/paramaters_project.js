let number = process.argv[2]
function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " is an even number!")
    }

    else if (number % 2 == 1) {
        console.log(number + " is an odd number!")
}
}
evenOrOdd(90)

let integer1 = process.argv[2]
let integer2 = process.argv [3]
function divisor(integer1, integer2) {
    let divisionAnswer = integer1 % integer2
    if (divisionAnswer == 0)  {
        console.log(integer1, " is divisible by", integer2)
    }
    else if (divisionAnswer > 0) {
        console.log(integer1, " is not divisble by", integer2)
    }
}

divisor(7, 3)

function distance(x1, y1, x2, y2) {
    let answer = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    console.log("michael and anthony are ", answer + " meters apart")
}
distance(3.28, 2.26, 3.92, 3)

function arrayHandler([array]) {
    let array = [typeof [] === `object`, true, "1", "2", "3"]
    return array
}
arrayHandler(["1"])