class Calculator {
  constructor() {
    this.displayClickedValues = document.getElementById("clicked-values");
    this.displayResult = document.getElementById("display-result");
    this.dispalyTempResult = document.getElementById("temp-result");
    this.allNumbers = document.querySelectorAll(".button__number");
    this.allOperators = document.querySelectorAll(".button__operator");
    this.equal = document.getElementById("equal");

    this.clickedValues = "";
    this.displayValues = "";
    this.lastOperator = "";
    this.haveDot = false;
    this.result = null;
  }

  // Get number values
  getNumber(target) {
    if (target === "." && !this.haveDot) {
      this.haveDot = true;
    } else if (target === "." && this.haveDot) {
      return;
    }

    this.displayValues += target;
    this.displayResult.innerText = this.displayValues;
  }

  // Get operator values
  getOperator(target) {
    if (!this.displayValues || target === "=") return;

    this.haveDot = false;
    const operatorName = target;
    if (this.clickedValues && this.displayValues && this.lastOperator) {
      this.mathCalculation();
    } else {
      this.result = parseFloat(this.displayValues);
    }

    this.setValues(operatorName);
    this.lastOperator = operatorName;
  }

  // Set values
  setValues(operator = "") {
    this.clickedValues += ` ${this.displayValues} ${operator} `;
    this.displayClickedValues.innerText = this.clickedValues;
    this.displayValues = "";
    this.displayResult.innerText = "";
    this.dispalyTempResult.innerText = this.result;
  }

  // Math calculation
  mathCalculation() {
    if (this.lastOperator === "+") {
      this.result = parseFloat(this.result) + parseFloat(this.displayValues);
    } else if (this.lastOperator === "-") {
      this.result = parseFloat(this.result) - parseFloat(this.displayValues);
    } else if (this.lastOperator === "/") {
      this.result = parseFloat(this.result) / parseFloat(this.displayValues);
    } else if (this.lastOperator === "X") {
      this.result = parseFloat(this.result) * parseFloat(this.displayValues);
    } else if (this.lastOperator === "%") {
      this.result = parseFloat(this.result) % parseFloat(this.displayValues);
    }
  }

  // Equal Result
  equalResult() {
    if (!this.displayValues || !this.clickedValues) return;
    this.haveDot = false;
    this.mathCalculation();
    this.setValues();

    this.displayResult.innerText = `= ${this.result}`;
    this.dispalyTempResult.innerText = "";
  }

  // Clear All
  clearAll() {
    this.displayClickedValues.innerText = "";
    this.displayResult.innerText = "";
    this.dispalyTempResult.innerText = "";
    this.clickedValues = "";
    this.displayValues = "";
    this.result = null;
  }

  // Clear last entry
  clearLastEntry() {
    this.displayValues = "";
    this.displayResult.innerText = "";
  }

  // Keyboard operation
  keyDown(e) {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      this.clickButton(e.key, this.allNumbers);
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "X" ||
      e.key === "/" ||
      e.key === "%"
    ) {
      this.clickButton(e.key, this.allOperators);
    } else if (e.key === "Enter" || e.key === "=") {
      this.equal.click();
    } else if (e.key === "Backspace") {
      this.clearLastEntry();
    }
  }

  clickButton(key, numbers) {
    numbers.forEach((number) => {
      if (number.innerText === key) {
        number.click();
      }
    });
  }
}

// Main operations
const operations = () => {
  const allNumbers = document.querySelectorAll(".button__number");
  const allOperators = document.querySelectorAll(".button__operator");
  const clearCal = document.getElementById("clear-cal");
  const lastEntry = document.getElementById("last-entry");
  const equal = document.getElementById("equal");

  // Instantiate the Calculator class
  const calc = new Calculator();

  // Numbers
  allNumbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      calc.getNumber(e.target.innerText);
    });
  });

  // Operators
  allOperators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      calc.getOperator(e.target.innerText);
    });
  });

  // Equal
  equal.addEventListener("click", () => {
    calc.equalResult();
  });

  // Clear all
  clearCal.addEventListener("click", () => {
    calc.clearAll();
  });

  // Clear last entry
  lastEntry.addEventListener("click", (e) => {
    calc.clearLastEntry();
  });

  // Operate with keyboard
  window.addEventListener("keydown", (e) => {
    calc.keyDown(e);
  });
};

// When DOM Content Loaded
window.addEventListener("DOMContentLoaded", () => {
  operations();
});
