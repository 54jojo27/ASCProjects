// query selctor grabs first h1 in the html
let firstHeading = document.querySelector('h1')
console.log(firstHeading)

// this sends a message when the website loads up
let name = "jojo"
alert("Hello " + name + " Welcome!")

// this is how we change the background color of the first h1
let color = "yellow";
firstHeading.style.backgroundColor = color;
firstHeading.style.fontSize = "60px"

// this is how the second h1 is grabbed
let secondHeading = document.querySelector("#two")
// another way is
// let secondHeading = document.getElementById('two')

let color2 = "red";
secondHeading.style.backgroundColor = color2;

// this grabs all of the h1s on the html
let allHeadings = document.querySelectorAll('h1')

// this is how we change the text inside an element
secondHeading.innerHTML = "this is the new text"