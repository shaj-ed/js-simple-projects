// Get all 
const nav = document.querySelector('.header__nav');
const openButton = document.querySelector('#open-nav');
const closeButton = document.querySelector('#close-nav');
const logo = document.querySelector('.header__logo');

// Event
openButton.addEventListener('click', (e) => {
    nav.classList.toggle('open');

    // Logo color
    nav.classList.contains('open') ? logo.style.color = '#eee' : logo.style.color = '#222';
})

closeButton.addEventListener('click', (e) => {
    nav.classList.remove('open');
    logo.style.color = '#222';
})