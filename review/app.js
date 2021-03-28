// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 5,
        name: "Elliot Elderson",
        job: "Cyber Security",
        img:
          "./el.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 6,
        name: "Jenny White",
        job: "SEO",
        img:
          "./person.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
];

// Get all items
const img = document.querySelector('#person_img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevButton = document.querySelector('#prev_button');
const nextButton = document.querySelector('#next_button');
const randomButton = document.querySelector('.random_button');

// Initial value
let value = 0;

// Show person based on value
const showPerson = () => {
    const item = reviews[value];

    img.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    info.innerText = item.text;
    
    author.style.textTransform = 'capitalize';
    job.style.textTransform = 'capitalize';
}

// Set default review by using DOMContentLoaded event at window
window.addEventListener('DOMContentLoaded', (event) => {
    showPerson();
})

// Next button
nextButton.addEventListener('click', (e) => {
    value++;

    if(reviews[value]) {
        showPerson();
    } else {
        value = 0;
        showPerson();
    }
})

// Prev button
prevButton.addEventListener('click', (e) => {
    value--;

    if(reviews[value]) {
        showPerson();
    } else {
        value = reviews.length - 1;
        showPerson();
    }
})

// Random button
randomButton.addEventListener('click', (e) => {
    value = Math.floor(Math.random() * reviews.length);
    showPerson(value);
})