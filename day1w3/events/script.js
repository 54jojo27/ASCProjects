let div = document.querySelector("div")

let clickMeButton = document.querySelector("#click-me")

let hideButton = document.querySelector("#display-btn")

clickMeButton.onclick = function() {
    //whenever button is clicked, run code
    if (div.style.backgroundColor == "orange") {
        div.style.backgroundColor = "aqua"
        div.innerHTML = "I am a squirtle"
    } else {
        div.style.backgroundColor == "orange"
        div.innerHTML = "I am a charmander"
    }
}

hideButton.onclick = function() {
    //whenever button is clicked, run code
    if (div.style.display !== "none") {
        div.style.display = "none"
        hideButton.innerHTML = "show"
    } else {
        div.style.display = "block"
        hideButton.innerHTML = "hide"
    }
}
