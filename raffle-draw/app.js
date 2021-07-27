window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  // Select DOM
  const inpNames = document.querySelector("#names");
  const nameList = document.querySelector(".name-list");
  const showText = document.querySelector(".show-text");
  const displayName = document.querySelector(".display-name");
  const shoot = document.querySelector("#shoot-button");
  const winnerOne = document.querySelector("#winner-one");
  const winnerTwo = document.querySelector("#winner-two");
  const winnerThree = document.querySelector("#winner-three");

  const participantNames = [];

  inpNames.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (!inpNames.value) {
        alert("Please input names.");
      } else {
        let names = inpNames.value.split(", ");
        showText.style.opacity = 1;

        names.forEach((name) => {
          participantNames.push(name);
          let listName = createListName(name);
          nameList.appendChild(listName);
        });

        inpNames.value = "";
      }
    }
  });

  shoot.addEventListener("click", function () {
    if (!participantNames.length) {
      alert("There is no Entry.");
    } else {
      let names = shuffle(participantNames);

      for (let i = 0; i < names.length; i++) {
        (function (i, count) {
          setTimeout(() => {
            let rand = Math.floor(Math.random() * names.length);
            displayName.innerText = names[rand];

            if (count === names.length - 1) {
              if (!winnerOne.innerText) {
                showWinner(names[rand], winnerOne);
              } else if (!winnerTwo.innerText) {
                showWinner(names[rand], winnerTwo);
              } else if (!winnerThree.innerText) {
                showWinner(names[rand], winnerThree);
                shoot.disabled = true;
                shoot.style.cursor = "not-allowed";
              }
            }
          }, i);
        })(i * 100, i);
      }
    }
  });

  function createListName(name) {
    let li = document.createElement("li");
    li.classList.add("name");
    li.innerText = name;

    return li;
  }

  function shuffle(arr) {
    let shuffledArr = [...arr];

    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let temp = shuffledArr[rand];
      shuffledArr[rand] = shuffledArr[i];
      shuffledArr[i] = temp;
    }

    return shuffledArr;
  }

  function showWinner(name, winner) {
    winner.innerText = name;
    let ind = participantNames.indexOf(name);
    participantNames.splice(ind, 1);
  }
}
