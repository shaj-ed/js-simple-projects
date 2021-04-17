// ==== Select all item ====
const form = document.querySelector("#profileForm");
const profileName = document.querySelector("#inputName");
const profileProfe = document.querySelector("#inputProfession");
const profileSkills = document.querySelector("#inputSkills");
const profileAbout = document.querySelector("#inputAbout");
const inputButton = document.querySelector("#inputButton");
const inputs = document.querySelectorAll("#profileForm input");
const textarea = document.querySelector("#profileForm textarea");

const profileSection = document.querySelector(".profile__section");
const formSection = document.querySelector(".form__section");
const successAlert = document.querySelector(".success");

// ==== Events ====
// Form Submit
form.addEventListener("submit", createProfile);

// Window Loaded
window.addEventListener("DOMContentLoaded", setUpProfiles);

// ==== Functions ====
// Create profile
function createProfile(e) {
  e.preventDefault();

  // Get all values
  const name = profileName.value;
  const profe = profileProfe.value;
  const skills = profileSkills.value;
  const about = profileAbout.value;

  if (!name || !profe || !skills || !about || !about) {
    // Show basic alerts
    inputs.forEach((input) => {
      if (!input.value) {
        displayAlert("Input Your Data", "alert__danger", input.parentElement);
      }
    });
    if (!about) {
      displayAlert("Input Your Data", "alert__danger", textarea.parentElement);
    }
  } else {
    // Set data at profile section
    addProfile(name, profe, skills, about);

    displaySuccess("Added Profile successfully!", "alert__success");

    // Back to Default
    backToDefault();

    // Add Local Storage
    addLocalStorage(name, profe, skills, about);
  }
}

// Display alert
function displayAlert(text, action, inputAppend) {
  const alert = document.createElement("span");
  alert.classList.add("alert");
  inputAppend.appendChild(alert);

  alert.innerText = text;
  alert.classList.add(action);

  setTimeout(() => {
    inputAppend.removeChild(alert);
    alert.classList.remove(action);
  }, 1000);
}

// Display alert success
function displaySuccess(text, action) {
  successAlert.innerText = text;
  successAlert.classList.add(action);

  setTimeout(() => {
    successAlert.innerText = "";
    successAlert.classList.remove(action);
  }, 1000);
}

// Back to default
function backToDefault() {
  profileName.value = "";
  profileProfe.value = "";
  profileSkills.value = "";
  profileAbout.value = "";
}

// ==== Local Storage ====
function addLocalStorage(name, profe, skills, about) {
  const profile = {
    name: name,
    profe: profe,
    skills: skills.split(", "),
    about: about,
  };

  let personArray = getLocalStorage();

  personArray.push(profile);

  localStorage.setItem("persons", JSON.stringify(personArray));
}

// Get local storage
function getLocalStorage() {
  return localStorage.getItem("persons")
    ? JSON.parse(localStorage.getItem("persons"))
    : [];
}

// ==== Setting up profiles from local storage ====
function setUpProfiles() {
  let personArray = getLocalStorage();

  if (personArray.length > 0) {
    personArray.forEach((person) => {
      addProfile(person.name, person.profe, person.skills, person.about);
    });
  }
}

// Add profile
function addProfile(name, profe, skills, about) {
  // Set data at profile section
  const profile = document.createElement("div");
  profile.classList.add("profile");
  profile.innerHTML = `<div class="profile__image">
                        </div>
                        <div class="profile__info">
                            <h2 class="profile__name">${name}</h2>
                            <p class="profile__profession">${profe}</p>
                            <p class="profile__skills">Skills: ${skills}</p>
                            <p class="profile__about">${about}</p>
                        </div>
                    </div>`;
  profileSection.appendChild(profile);
}
