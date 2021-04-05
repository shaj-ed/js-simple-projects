// All Books
const books = [
  {
    id: "1",
    name: "mystery",
    price: "$12.4",
    category: "mystery",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit.",
  },
  {
    id: "2",
    name: "design",
    price: "$12.4",
    category: "design",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur.",
  },
  {
    id: "3",
    name: "design",
    price: "$16.4",
    category: "design",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit.",
  },
  {
    id: "4",
    name: "fictional",
    price: "$11.4",
    category: "fictional",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit, ipsum dolor sit amet consectetur.",
  },
  {
    id: "5",
    name: "fictional",
    price: "$9.4",
    category: "fictional",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing.",
  },
  {
    id: "6",
    name: "design",
    price: "$6.4",
    category: "design",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit.",
  },
  {
    id: "7",
    name: "mystery",
    price: "$16.10",
    category: "mystery",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit, ipsum dolor sit amet consectetur, ipsum dolor sit amet consectetur.",
  },
  {
    id: "8",
    name: "mystery",
    price: "$10",
    category: "mystery",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur.",
  },
  {
    id: "9",
    name: "design",
    price: "$1.10",
    category: "design",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consec.",
  },
  {
    id: "10",
    name: "fictional",
    price: "$10.10",
    category: "fictional",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit, ipsum dolor sit amet consectetur, ipsum dolor sit amet consectetur.",
  },
  {
    id: "11",
    name: "thriller",
    price: "$12.10",
    category: "thriller",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "12",
    name: "crime",
    price: "$15.12",
    category: "crime",
    disc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste perspiciatis consectetur adipisicing elit, ipsum dolor sit amet consectetur, ipsum dolor sit amet consectetur.",
  },
];

// Get items
const bookList = document.querySelector(".book-list");
const buttonAll = document.querySelector(".buttons");

// DOMConterntLoaded event
window.addEventListener("DOMContentLoaded", () => {
  displayBooks(books);
  displayButtons();
});

// Display all books function
const displayBooks = (book) => {
  let showBooks = book
    .map((item) => {
      return `<section class="book-list">
      <div class="book">
        <div class="book-img"></div>

        <div class="book-details">
          <header class="book-header">
            <h3 class="book-title">${item.name}</h3>

            <span class="book-price">${item.price}</span>
          </header>

          <p class="book-snippet">
            ${item.disc}
          </p>
        </div>
      </div>
    </section>`;
    })
    .join("");

  bookList.innerHTML = showBooks;
};

// Make buttons dynamically based on categories funtion
const displayButtons = () => {
  let makeBtn = books.reduce(
    (values, currentValue) => {
      if (!values.includes(currentValue.category)) {
        values.push(currentValue.category);
      }
      return values;
    },
    ["all"]
  );

  let showButtons = makeBtn.map((btn) => {
    return `<button class="button" data-id=${btn}>${btn}</button>`;
  });

  buttonAll.innerHTML = showButtons;

  const buttons = buttonAll.querySelectorAll(".button");

  // Filtered
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let category = e.currentTarget.dataset.id;

      // filter at books array for seeing the same items
      const filteredBook = books.filter((book) => book.category === category);

      // show the filtered books
      category === "all" ? displayBooks(books) : displayBooks(filteredBook);
    });
  });
};
