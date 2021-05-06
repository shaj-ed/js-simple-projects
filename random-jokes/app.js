const jokes = document.querySelector(".joke");
const generateButton = document.querySelector(".container__button");

let url = "https://icanhazdadjoke.com/";

// Event
window.addEventListener("DOMContentLoaded", generateJoke);
generateButton.addEventListener("click", generateJoke);

// Function
// function generateJoke() {
//   fetch(url, {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((joke) => {
//       jokes.innerText = joke.joke;
//     });
// }

// Using With aync await
async function generateJoke() {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await response.json();

  jokes.innerText = joke.joke;
}
