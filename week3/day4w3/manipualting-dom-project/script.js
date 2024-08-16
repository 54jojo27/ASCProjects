let newParagraphButton = document.querySelector("#p-button");
let imgButton = document.querySelector("#img-button");


let textDiv = document.querySelector("#p-div");
let imgDiv = document.querySelector("#img-div");


newParagraphButton.onclick = function() {
    textDiv.style.display = "block";
    imgDiv.style.display = "none";
    textDiv.innerHTML += "here's a new sentence <3 ";
}

imgButton.onclick = function() {
    imgDiv.style.display = "block";
    textDiv.style.display = "none";

    let randomInt = Math.floor(Math.random() * 2);
    let newImg = document.createElement("img");
    if (randomInt == 0) {
        newImg.src = `./images/sharko.jpg`;
    } else {
        newImg.src = `./images/yippee.jpg`;
    }

    imgDiv.appendChild(newImg);
};