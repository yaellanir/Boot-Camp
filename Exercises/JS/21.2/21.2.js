const plusButton = document.querySelector(".plusbutton");
const minusButton = document.querySelector(".minusbutton");
const paragraph = document.querySelector("p");
let fontSize = 15;
paragraph.style.fontSize = `${fontSize}px`;
// let larger =  `${fontSize + 10}px`;
// let smaller = ;
// let fontsize = window.getComputedStyle(paragraph).getPropertyValue('font-size');

plusButton.addEventListener("click", (e) => {
  paragraph.style.fontSize = `${fontSize + 5}px`;
  fontSize = fontSize + 5;
});
minusButton.addEventListener("click", (e) => {
  paragraph.style.fontSize = `${fontSize - 5}px`;
  fontSize = fontSize - 5;
});
