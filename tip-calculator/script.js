// Select all elements
const tipForm = document.querySelector('.calculator__form');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const personInput = document.querySelector('#person');
const tipValue = document.querySelector('.calculator__tip--value');
const tipPerPerson = document.querySelector('.calculator__results .tip');
const totalPerPerson = document.querySelector('.calculator__results .total');

// Change event at tipForm
tipForm.addEventListener('change', () => {
    // String to Number
    let bill = parseFloat(billInput.value);
    let tip = parseFloat(tipInput.value);
    let person = parseFloat(personInput.value);

    // Calculation
    const tips = (bill * tip) / 100;
    let total = bill + tips; // Main total
    total = total / person; // Total per person
    let showPerTip = tips / person; // Tip per person

    // Decimal fixed
    total = total.toFixed(2);
    showPerTip = showPerTip.toFixed(2);

    // Show
    totalPerPerson.textContent = total;
    tipPerPerson.textContent = showPerTip;
    tipValue.innerHTML = `${tipInput.value}%`;
})