
const imageElement = document.createElement("img");
const randomNumber = Math.floor(Math.random() * 6);

imageElement.src = `images/${randomNumber}.jpg`

document.body.appendChild(imageElement)