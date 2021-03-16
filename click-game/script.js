// Get all elements
const stats = document.querySelector('.container__stats'); // where show the counts of click
const btnStart = document.querySelector('button[name=start]'); // game start button
const btnClick = document.querySelector('button[name=click]'); // main game click button

const winScore = 10; // The win score
let count = 0; // for the counting initial its 0

// Event for btnStart
btnStart.addEventListener('click', () => {
    start(); // When event is clicked than this function will call
})

// Event for btnClick
btnClick.addEventListener('click', () => {
    // when clicked we will increase the count vairable
    count++;

    // show the count
    stats.textContent = count;
})

// start()
const start = () => {
    // set count to 0
    count = 0;

    // show the count
    stats.textContent = count;

    // remove the dasable attribute from the click button
    btnClick.removeAttribute('disabled');

    // start the counting function
    startCounting();
}

// startCounting()
const startCounting = () => {
    setTimeout(() => {

        if(isWin()) {
            stats.textContent = `You clicked '${count}' times,You Won!`;
        } else {
            stats.textContent = `You clicked '${count}' times,You Lose!`;
        }

        // disabled the click button
        btnClick.setAttribute('disabled', true);
    }, 2000)
}

// isWin()

const isWin = () => {
    if(count <= winScore) {
        return false;
    } else {
        return true;
    }
}