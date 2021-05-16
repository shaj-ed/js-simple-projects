// Seletc DOM elements //
const result = document.querySelector("#result");
const copyButton = document.querySelector("#copy-pass");
const lengthEl = document.querySelector("#password__length");
const upperEl = document.querySelector("#uppercase__letter");
const lowerEl = document.querySelector("#lowercase__letter");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const generateButton = document.querySelector("#generate__button");

// Store in an object all random functions
const randomChar = {
  upper: randomUpperCase,
  lower: randomLowerCase,
  number: randomNumbers,
  symbol: randomSymbols,
};

// Events //

// Pass Generate
generateButton.addEventListener("click", () => {
  const passLength = parseInt(lengthEl.value);
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  // Generate password
  result.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    passLength
  );
});

// Copy to clipboard
copyButton.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = result.innerText;

  if (!password) {
    return;
  } else {
    // Add value at textarea which we want to copy
    textarea.value = password;
    // Append to body
    document.body.appendChild(textarea);
    // Select the element
    textarea.select();
    document.execCommand("copy");
    // Then remove it
    textarea.remove();
    // Confirmation
    alert("Copied to clipboard");
  }
});

// Functions //

// Generate Password
function generatePassword(upper, lower, number, symbol, length) {
  // Init the password
  let password = "";
  // Count checked type
  const typeCount = upper + lower + number + symbol;
  // Get types array
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // If nothing checked
  if (typeCount === 0) {
    return "";
  }

  // Loop through the length
  for (let i = 0; i < length; i += typeCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      password += randomChar[funcName]();
    });
  }

  const generatedPass = password.slice(0, length);
  return generatedPass;
}

// Generate random character functions //

// UpperCase Letters
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// LowerCase Letters
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Numbers
function randomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Symbols
function randomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 16) + 33);
}

// console.log(randomUpperCase());
// console.log(randomLowerCase());
// console.log(randomNumbers());
// console.log(randomSymbols());
