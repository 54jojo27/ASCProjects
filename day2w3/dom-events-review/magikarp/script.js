// grabs the h1
let h1 = document.querySelector("h1")

// grabs first p it finds
let firstP = document.querySelector("p")

// grabs p inside div
let secondP = document.querySelector("div p")
console.log(secondP)
// alt method
// let secondPAlternative = document.querySelectorAll('p')

// grab the div with the id of "click-div"
let clickDiv = document.querySelector("#click_div")

clickDiv.style.width = "360px";
clickDiv.style.border = "3px solid black";

function generateRandomRgbValue() {
    let randomNumBetween8And255 = Math.floor(Math.random() * 256);
    return randomNumBetween8And255;
}

clickDiv.onclick = function () {
    clickDiv.innerHTML += " Magikarp ";
}       

clickDiv.onclick = function () {
    let redValue = generateRandomRgbValue();
    let greenValue = generateRandomRgbValue();
    let blueValue = generateRandomRgbValue();
    let color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    clickDiv.style.backgroundColor = color;
}