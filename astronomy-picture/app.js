// DOM Selects
const showDate = document.querySelector("#date");
const input = document.querySelector("input");

// API variables
const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
const API_KEY = "J6XuMlg0nEz0vTomQjgw05agAFALf7rfdgvoKBIL";

// Events
window.addEventListener("DOMContentLoaded", (e) => {
  init();
});

input.addEventListener("change", () => {
  // Get input value
  let getDate = input.value;

  // New URL
  const newURL = `${BASE_URL}${API_KEY}&date=${getDate}`;

  // Get content by input date
  getContentByInput(newURL);
});

// Funtions //

// Init
function init() {
  // Show content
  getContent();
}

// Get Today's Content
async function getContent() {
  let response = await fetch(`${BASE_URL}${API_KEY}`);
  let data = await response.json();

  // Show Content
  showContent(data);
}

// Get content by input date
async function getContentByInput(url) {
  let response = await fetch(`${url}`);
  let data = await response.json();

  // Show content
  showContent(data);
}

//  Show content
function showContent(data) {
  // Show Date
  showDate.innerText = `(${data.date})`;

  // Get all data show html docs
  const article = document.querySelector(".article");

  article.innerHTML = `<div class="article__media">
            </div>
            <div class="article__body">
                <h3 class="article__title">${data.title}</h3>
                <h4 class="article__copyright">Copyright: ${data.copyright}</h4>
                <p class="article__description">${data.explanation}</p>
            </div>`;

  const articleMedia = article.querySelector(".article__media");

  if (data.media_type === "video") {
    articleMedia.innerHTML = `<iframe
                width="100%"
                height="350"
                src="${data.url}">
            </iframe>`;
  } else {
    articleMedia.innerHTML = `<img src="${data.url}" alt="">`;
  }
}
