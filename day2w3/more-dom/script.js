/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.querySelector("#change_button")
let addButton = document.querySelector("#add_button")
let deleteButton = document.querySelector("#delete_button")
let imageDiv = document.querySelector("#image_div")
let firstImage = document.querySelector("#first_image")

/*  @TODO - Create an array of Pokemon to select from  */
let pokemonArray = [
    "bulbasaur.png",
    "charmander.png",
    "pikachu.png",
    "squirtle.png",
]

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
changeButton.onclick = function () {
    let randomInt = Math.floor(Math.random() * pokemonArray.length)
    let randomPokemonImage = pokemonArray[randomInt];
    firstImage.src = `./images/${randomPokemonImage}`;
}
/*  @TODO - Create a Function for our addButton to Add New Pokemon  */
addButton.onclick = function () {
let randomInt = Math.floor(Math.random() * pokemonArray);
let randomPokemonImage = pokemonArray[randomInt]

let newImage = document.createElement("img");
newImage.src = `./images/${randomPokemonImage}`
imageDiv.appendChild(newImage);
}

/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
deleteButton.onclick = function () {
    let childrenOfImageDiv = imageDiv.children
    let firstChild = childrenOfImageDiv[0]
    imageDiv.removeChild(firstChild)
}