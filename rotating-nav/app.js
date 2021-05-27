// DOM Selects
const contents = document.querySelector(".main");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

// Event
openButton.addEventListener("click", () => {
  contents.classList.add("show--nav");
});

closeButton.addEventListener("click", () => {
  contents.classList.remove("show--nav");
});
