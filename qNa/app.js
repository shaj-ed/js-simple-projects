// Get all items
const questions = document.querySelectorAll('.main__content');

// Show answers
questions.forEach(question => {
    const button = question.querySelector('.button');

    button.addEventListener('click', () => {
        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show__text');
            }
        })
        
        question.classList.toggle('show__text');
    })
})
