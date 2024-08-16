// Add your code to this file
let background = document.querySelector("body")

let color = "blue"
background.style.backgroundColor = color

let pictureBorder = document.querySelector("#starters_image_div img")

let borderStyle = "dotted"
let borderColor = "orange"
pictureBorder.style.borderStyle = borderStyle
pictureBorder.style.borderColor = borderColor

let starterBorder = document.querySelectorAll(".pokemon_images")
for (let i = 0; i < starterBorder.length; i++) {
    starterBorder[i].style.borderStyle = borderStyle
    starterBorder[i].style.borderColor = borderColor
}

let head1 = document.querySelector("h1")
head1.style.textDecoration = "underline"

let head2 = document.querySelector("h2")
head2.innerHTML = "Here are Pokemon's amazing gen 1 starters!"
let centerText = document.querySelector(".introduction")
centerText.style.textAlign = `center`