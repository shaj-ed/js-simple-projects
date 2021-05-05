// get items
const colorCards = document.querySelectorAll(".color");
const targetColor = document.querySelector(".target-color");
const restartButton = document.querySelector(".restart-btn");
const correctModal = document.querySelector(".correct");
const easyButton = document.querySelector(".easy-btn");
const hardButton = document.querySelector(".hard-btn");

// Colors
let colorNum = 6;
let colors = generateColor(colorNum);
let pickedColor = pickColor();

// Easy mode
easyButton.addEventListener("click", () => {
  colorCards.forEach((card) => {
    if (card.classList.contains("hard")) {
      card.style.display = "none";
    }
  });

  easyButton.classList.add("active");
  hardButton.classList.remove("active");

  restartButton.innerText = "New Game";

  colorNum = 3;
  colors = generateColor(colorNum);
  pickedColor = pickColor();
  targetColor.innerText = pickedColor;

  mainGame();
});

// Hard mode
hardButton.addEventListener("click", () => {
  colorCards.forEach((card) => {
    if (card.classList.contains("hard")) {
      card.style.display = "grid";
    }
  });

  restartButton.innerText = "New Game";

  hardButton.classList.add("active");
  easyButton.classList.remove("active");

  colorNum = 6;

  mainGame();
});

// main
function mainGame() {
  // init targetColor
  targetColor.innerText = pickedColor;

  colorCards.forEach((card, index) => {
    card.style.backgroundColor = colors[index];

    card.addEventListener("click", (e) => {
      let clickedColor = e.currentTarget.style.backgroundColor;
      if (clickedColor === pickedColor) {
        colorCards.forEach((card) => {
          card.style.backgroundColor = pickedColor;
          card.innerText = "";
        });
        restartButton.innerText = "Play again?";
        restartButton.addEventListener(
          "click",
          () => (restartButton.innerText = "New Game")
        );
        correctModal.classList.add("show");
        setTimeout(() => {
          correctModal.classList.remove("show");
        }, 1000);
      } else {
        card.style.backgroundColor = "transparent";
        card.innerText = "Try Again";
      }
    });
  });
}

// Restart
restartButton.addEventListener("click", () => {
  colors = generateColor(colorNum);
  pickedColor = pickColor();
  targetColor.innerText = pickedColor;

  // Set th bg at all cards
  colorCards.forEach(
    (card, index) => (card.style.backgroundColor = colors[index])
  );
});

// Pick color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

// Generate colors array
function generateColor(clrs) {
  let arr = [];

  for (let i = 0; i < clrs; i++) {
    arr.push(randomColor());
  }

  return arr;
}

// Random Cololrs
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// Run
mainGame();
