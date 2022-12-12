const symbol = document.querySelector(".question-box");
const msg = document.querySelector(".msg");
const playAgain = document.querySelector(".play-again");
const displayLetters = document.querySelector(".display-letters");
const GuessedLetters = [];
const confirmButton = document.querySelector(".confirm");

gameState = {
  letterToGuess: null,
};

window.addEventListener("keypress", function (event) {
  const key = event.key.toLowerCase();
  if (!key.match(/[a-z]/)) {
    msg.innerText = "Can't pick that!";
    msg.classList.add("lose-msg");
    return
  }
  if (GuessedLetters.includes(key)) {
    msg.innerText = "Already Guessed that idiot";
    msg.classList.add("lose-msg");
    return
  }
  console.dir(event);
  console.log(event.key);
  console.log(GuessedLetters);
  checkIsRight(event.key);
  display();
});

function display() {
  let displayed = "";
  GuessedLetters.forEach((letter) => {
    displayed += `${letter}, `;
  });
  console.log(displayed);
  displayLetters.innerText = displayed;
}

function generateLetter() {
  let charCode = Math.random() * (90 - 65) + 65;
  gameState.letterToGuess = String.fromCharCode(charCode).toLowerCase();
  console.log(gameState.letterToGuess);
}
generateLetter();

function checkIsRight(letter) {
  if (gameState.letterToGuess === letter) {
    msg.classList.remove("lose-msg");
    msg.classList.add("win-msg");
    msg.innerText = "You Win!";
    symbol.innerText = gameState.letterToGuess;
    playAgain.style.display = "flex";
  } else {
    msg.classList.add("lose-msg");
    msg.innerText = "You Suck!";
    GuessedLetters.push(letter);
    display();
  }
}

confirmButton.addEventListener("click", restartGame);

function restartGame() {
  generateLetter();
  symbol.innerText = "?";
  playAgain.style.display = "none";
  msg.innerText = "Guess a key";
  msg.style.color = "black";
  displayLetters.innerText = "";
}
