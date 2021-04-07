// Get all items
const numberOne = document.querySelector('.number-one');
const numberTwo = document.querySelector('.number-two');
const numberAnswer = document.querySelector('.number-answer');

const answerValue = document.querySelector('#answerValue');
const submitButton = document.querySelector('#submitButton');

const rightModal = document.querySelector('.right-modal');
const wrongModal = document.querySelector('.wrong-modal');


// Get random number
const randomNumOne = () => {
    let randomNum = Math.floor(Math.random() * 100);

    numberOne.innerText = randomNum;
}

const randomNumTwo = () => {
    let randomNum = Math.floor(Math.random() * 100);

    numberTwo.innerText = randomNum;
}

randomNumOne();
randomNumTwo();



// Get Answer
submitButton.addEventListener('click', (e) => {
    let numOne = parseInt(numberOne.innerText);
    let numTwo = parseInt(numberTwo.innerText);
    let answer = parseInt(answerValue.value);
    // Check the input sum
    if(answer === (numOne + numTwo)) {
        rightModal.classList.add('active');
    } else {
        // alert(`The Answer is ${(numOne + numTwo)}`);
        wrongModal.classList.add('active');
    }

    numberAnswer.innerText = answer;
    answerValue.value = '';

    setTimeout(() => {
        location.reload();
    }, 5000)
})


