// DOM selection
const loaderText = document.querySelector(".loader__text");
const progressBar = document.querySelector(".progress__bar");
const bg = document.querySelector(".container");

// Init loader
let loader = 0;

// Set interval
let init = setInterval(loading, 20);

// Loading function
function loading() {
  loader++;

  if (loader === 100) {
    clearInterval(init);
    loaderText.style.display = "none";
    progressBar.style.display = "none";
  }

  progressBar.style.width = loader + "%";
  progressBar.style.opacity = scale(loader, 0, 100, 1, 0);

  loaderText.innerText = loader + "%";
  loaderText.style.opacity = scale(loader, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(loader, 0, 100, 20, 0)}px)`;
}

// Scale out the opacity and blur
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
