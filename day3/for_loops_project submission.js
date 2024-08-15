// let userInput = process.argv[2]
// for (let i = userInput; i >=0; i--) {
//     console.log(i)
// }

let students = ["Eric", "Paul", "Jojo", "Talib", "Trew", "Aldo"]
for (let i = 0; i < students.length; i++) {
    console.log("ASC 2024 Digital Titans", students[i])
}

let myArray = ['s', 'e', 'i', 'p', 'p', 'u', 'p', ' ', 'e', 't', 'u', 'c',]
for ( let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i])
}
// .length = 12, i starts at 12 and counts down while also being in the console log, outputting the letter

let counter = 10

for (let j = 1; j < 10; j++) {
    counter--;
    console.log('j:' + j + ' counter: ' + counter)

    if (counter == j) {
        console.log ('cya')
        break;
    }
}

for (k = 0; k < 5; k++) {
    for (l = 0; l < 5; l++) {
        console.log(k, l)
    }
}

// slow clock
for (m = 0; m < 24; m++) {
    for (n = 0; n < 60; n++) {
        for (o = 0; o < 60; o++) {
            console.log(m, n, o)
        }
    }
}