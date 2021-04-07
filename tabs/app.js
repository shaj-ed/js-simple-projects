// Get all items
const tabSection = document.querySelector(".tab__section");
const tabs = document.querySelectorAll(".tab");
const tabArticles = document.querySelectorAll(".tab__article");

// Event
tabSection.addEventListener("click", (e) => {
  let tabId = e.target.dataset.id;

  if (tabId) {
    //   remove active from all of tabs
    tabs.forEach((tab) => tab.classList.remove("active"));
    // add current tab
    e.target.classList.add("active");

    // remove active from all of tabArticles
    tabArticles.forEach((article) => article.classList.remove("active"));

    // show the tab article
    const tabArticle = document.querySelector(`#${tabId}`);
    tabArticle.classList.add("active");
  }
});
