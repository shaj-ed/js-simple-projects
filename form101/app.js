// Label titles
const labelTitles = [
  { label: "Enter your first name" },
  { label: "Enter your last name" },
  { label: "Enter your email", pattern: /\S+@\S+\.\S+/g },
  { label: "Create a passward", type: "password" },
];

// Form icons
const formIcons = [
  "fas fa-user-tie",
  "fas fa-user-tie",
  "far fa-envelope-open",
  "fas fa-key",
];

// ==== Select DOM elements ====
const container = document.querySelector(".container");
const formWrapper = document.querySelector(".container .form");
const inputBox = document.querySelector(".form__inputbox");
const formIcon = document.querySelector(".form__icon");
const formInput = document.querySelector(".form__input");
const inputLabel = document.querySelector("#input-label");
const formButtons = document.querySelector(".form__buttons");
const buttonPrev = document.querySelector("#button-left");
const buttonNext = document.querySelector("#button-right");
const progressBar = document.querySelector(".form__bar");

// Variables
let position = 0;

// ==== Events ====

// Window Loaded
window.addEventListener("DOMContentLoaded", getQuestion);

// Next button click event
buttonNext.addEventListener("click", validate);

// Previous button click
buttonPrev.addEventListener("click", () => {
  position = position - 1;

  if (position < 1) {
    buttonPrev.style.opacity = "0";
  }

  getQuestion();
});

// Input enter key press
formInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    validate();
  }
});

// ==== Functions ====

// Get question from array
function getQuestion() {
  // Get form icon
  formIcon.className = `${formIcons[position]} form__icon`;
  // Get label title
  inputLabel.innerText = labelTitles[position].label;
  // Get input type
  formInput.type = labelTitles[position].type || "text";
  formInput.focus();

  // Progress bar width
  progressBar.style.width = (position * 100) / labelTitles.length + "%";

  // Show question
  showQuestion();
}

// Show the question
function showQuestion() {
  inputBox.style.transform = "translate(0)";
  formButtons.style.transform = "translate(0)";
}

// Simple Form Validation Function
function validate() {
  if (!formInput.value.match(labelTitles[position].pattern || /.+/)) {
    failInput();
  } else {
    passInput();
  }
}

// if failed input
function failInput() {
  container.classList.add("error");

  // Shake at container
  container.classList.add("shake-rotate");
  // Shake at input box
  inputBox.classList.add("shake-animation");

  // Remove class
  setTimeout(() => {
    container.classList.remove("error");
    container.classList.remove("shake-rotate");
    inputBox.classList.remove("shake-animation");
  }, 2000);
}

// if passed input
function passInput() {
  // Store the output at the labelTitle array
  labelTitles[position].output = formInput.value;

  formInput.value = "";
  buttonPrev.style.opacity = "0.5";
  inputBox.classList.add("shake-rotate");
  // Remove shake rotate
  setTimeout(() => {
    inputBox.classList.remove("shake-rotate");
  }, 100);

  // Increment the labelTitles and icon array position
  position++;

  if (labelTitles[position]) {
    getQuestion();
  } else {
    progressBar.style.width = "100%";
    // Completed form
    formCompleted();
  }
}

// Form completed
function formCompleted() {
  formWrapper.style.opacity = "0";
  // Create end element
  const endTitle = document.createElement("h2");
  endTitle.classList.add("completed");
  endTitle.innerText = `Thanks ${labelTitles[0].output} and wellcome, You successfully completed your form.`;

  container.appendChild(endTitle);

  console.log(labelTitles);
}
