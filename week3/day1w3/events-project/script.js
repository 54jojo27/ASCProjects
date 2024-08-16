let display = document.querySelector("#color-display")

let aquaButton = document.querySelector("#aqua")
aquaButton.onclick = function () {
    display.style.backgroundColor = `aqua`
    display.innerHTML = `aqua`
}

let tealButton = document.querySelector("#teal")
tealButton.onclick = function () {
    display.style.backgroundColor = `teal`
    display.innerHTML = `teal`
}

let pinkButton = document.querySelector("#pink")
pinkButton.onclick = function () {
    display.style.backgroundColor = `pink`
    display.innerHTML = `pink`
}

let purpleButton = document.querySelector("#purple")
purpleButton.onclick = function () {
    display.style.backgroundColor = `purple`
    display.innerHTML = `purple`
}

let colorlessButton = document.querySelector("#colorless")
colorlessButton.onclick = function () {
    display.style.backgroundColor = `white`
    display.innerHTML = `white`
}