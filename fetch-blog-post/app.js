// DOM selection
const postsContainer = document.querySelector(".container__content");
const allPosts = document.querySelector(".container__posts");

// Event
window.addEventListener("DOMContentLoaded", getBlogPost);

// // Functions
// function getPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) => {
//       let i = 0;
//       posts.forEach((post) => {
//         i++;
//         if (i < 10) {
//           let div = document.createElement("div");
//           div.classList.add("post");

//           div.innerHTML = `
//             <div class="post__image">
//             <img src="" alt="" />
//             </div>

//             <div class="post__info">
//             <h3 class="post__title">${post.title}</h3>
//             <p class="post__body">${post.body}</p>
//             </div>
//           `;
//           allPosts.appendChild(div);

//           // Image src
//           fetch("https://unsplash.it/300/200")
//             .then((res) => res.blob())
//             .then((blob) => {
//               let imgSrc = URL.createObjectURL(blob);
//               const divImg = div.querySelector("img");
//               divImg.src = imgSrc;
//             })
//             .catch((err) => console.log(err));
//         }
//       });
//     })
//     .catch((err) => console.log(err.message));
// }

// Async Await
async function getBlogPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allPost = await response.json();
    let i = 0;

    allPost.forEach((post) => {
      i++;
      if (i < 10) {
        let div = document.createElement("div");
        div.classList.add("post");

        div.innerHTML = `
        <div class="post__image">
        <img src="" alt="" />
        </div>

        <div class="post__info">
        <h3 class="post__title">${post.title}</h3>
        <p class="post__body">${post.body}</p>
        </div>
      `;
        allPosts.appendChild(div);

        // Image src
        fetch("https://unsplash.it/300/200")
          .then((res) => res.blob())
          .then((blob) => {
            let imgSrc = URL.createObjectURL(blob);
            const divImg = div.querySelector("img");
            divImg.src = imgSrc;
          })
          .catch((err) => console.log(err.message));
      }
    });
  } catch (err) {
    console.log(err.message);
  }
}

// getBlogPost().catch((err) => console.log(err));
