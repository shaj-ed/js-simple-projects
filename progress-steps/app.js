// Selec DOM
const progressBar = document.querySelector("#progress__bar");
const circles = document.querySelectorAll(".circle");
const prevButton = document.querySelector("#prev__button");
const nextButton = document.querySelector("#next__button");

// Init count
let count = 1;

// Events //

// Next
nextButton.addEventListener("click", () => {
  count++;

  if (count > circles.length) {
    count = circles.length;
  }

  current();
});

// Prev
prevButton.addEventListener("click", () => {
  count--;

  if (count < 1) {
    count = 1;
  }

  current();
});

// Funcitons //

// Current
function current() {
  circles.forEach((circle, index) => {
    if (index < count) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circles .active");

  progressBar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Buttons
  if (count < 2) {
    prevButton.disabled = true;
  } else if (count === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
