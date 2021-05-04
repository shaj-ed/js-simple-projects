// Get items 
const mainImage = document.querySelector('.main-image img');
const images = document.querySelectorAll('.image img');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        mainImage.src = e.currentTarget.src;
        
        // active click
        images.forEach(image => image.classList.remove('active')); // first remove from all
        // then add it in current target
        img.classList.add('active');
      
    })
})