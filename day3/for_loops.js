// while loop
// let index = 0
// while(index < 5) {
//     console.log(index)
//     index++ // index += 1 // index + 1 are all the same
// }

let pokemon = ['Mahoraga', 'Megumi', 'Gojo', 'Nobara', 'Yuji', 'Sukuna'];

// for loop
for (let i = 0; i < pokemon.length; i++) {
    console.log(i, pokemon[i])

    if (pokemon[i] == "Nobara") {
        console.log("sukuna strikes! nobara is dead")
        break;
    }
}
console.log("done with the loop")