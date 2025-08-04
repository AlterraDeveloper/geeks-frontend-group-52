// DOM - Document Object Model

// DOM Manipulations - Взаимодействие с DOM

// Search

const textSpan = document.getElementById("text");

const redBtn = document.getElementById("red");
const yellowBtn = document.querySelector("#yellow");
const greenBtn = document.querySelector("#green");

function turnOnRed() {
  textSpan.textContent = "stop";
  textSpan.style.color = "red";
  redBtn.style.backgroundColor = "red";
  yellowBtn.style.backgroundColor = "#888";
  greenBtn.style.backgroundColor = "#888";
}
redBtn.addEventListener("click", turnOnRed);

function turnOnYellow() {
  textSpan.textContent = "wait";
  textSpan.style.color = "yellow";
  yellowBtn.style.backgroundColor = "yellow";
  redBtn.style.backgroundColor = "#888";
  greenBtn.style.backgroundColor = "#888";
}
yellowBtn.addEventListener("click", turnOnYellow);

function turnOnGreen() {
  textSpan.textContent = "go";
  textSpan.style.color = "green";
  greenBtn.style.backgroundColor = "green";
  redBtn.style.backgroundColor = "#888";
  yellowBtn.style.backgroundColor = "#888";
}
greenBtn.onclick = turnOnGreen;
