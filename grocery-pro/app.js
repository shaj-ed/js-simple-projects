// ==== Select all elements ====
const groceryForm = document.querySelector("#groceryForm");
const groceryItem = document.querySelector("#inputItem");
const groceryAddButton = document.querySelector("#inputButton");
const allList = document.querySelector(".list__container");
const groceryLists = document.querySelector(".lists");

const alert = document.querySelector(".alert");
const clearButton = document.querySelector(".clear__button");

// ==== Edit options ====
let editElement;
let editFlag = false;
let editId = "";

// ==== Events ====
groceryForm.addEventListener("submit", addItem);

// Clear all items
clearButton.addEventListener("click", clearItems);

// Window loaded
window.addEventListener("DOMContentLoaded", setupItems);

// ==== Functins ====
function addItem(e) {
  e.preventDefault();

  let groceryValue = groceryItem.value;
  const id = new Date().getTime().toString();

  if (groceryValue && !editFlag) {
    // Create all items
    createAllItems(id, groceryValue);
    // Display alert
    displayAlert("value added", "alert__success");
    allList.classList.add("visible");

    // Add local storage
    addLocalStorage(id, groceryValue);

    // Back to default
    backToDefault();
  } else if (groceryValue && editFlag) {
    editElement.innerText = groceryValue;
    displayAlert("item changes", "alert__success");

    // Set to local storage
    editLocalStorage(editId, groceryValue);

    // Back to default
    backToDefault();
  } else {
    displayAlert("please input value", "alert__error");
  }
}

// Clear items
function clearItems() {
  let lists = document.querySelectorAll(".list");

  if (lists.length > 0) {
    lists.forEach((item) => {
      groceryLists.removeChild(item);
    });
  }

  allList.classList.remove("visible");
  displayAlert("cleard all items", "alert__success");

  // Back to default
  backToDefault();
  // Delete from the local storage
  localStorage.removeItem("list");
}

// Deleting item
function deletingItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  groceryLists.removeChild(item);

  // Alert
  displayAlert("removed from the lists", "alert__success");

  if (groceryLists.children.length === 0) {
    allList.classList.remove("visible");
  }

  // Back to default
  backToDefault();
  // Delete from local storage
  deleteFromLocalStorage(id);
}

// Editing item
function editingItem(e) {
  const item = e.currentTarget.parentElement.parentElement;

  // edit the element
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryItem.value = editElement.innerText;

  editFlag = true;
  editId = item.dataset.id;

  groceryAddButton.innerText = "Edit";
}

// Back to default
function backToDefault() {
  groceryItem.value = "";
  editFlag = false;
  id = "";
  groceryAddButton.innerText = "Add";
}

// Display alert
function displayAlert(text, alertClass) {
  alert.innerText = text;
  alert.classList.add(alertClass);

  // Remove alert
  setTimeout(function () {
    alert.innerText = "";
    alert.classList.remove(alertClass);
  }, 1000);
}

// ==== Local Storage
// Add local storage
function addLocalStorage(id, value) {
  const grocery = { id, value };

  const items = getLocalStorage();

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// Get Local Storage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// Delete from local storage
function deleteFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// Edit at local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// ==== Setup all items ====
function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      createAllItems(item.id, item.value);
    });
    allList.classList.add("visible");
  }
}

// Create items
function createAllItems(id, value) {
  let list = document.createElement("li");
  list.classList.add("list");
  // Add id
  let attr = document.createAttribute("data-id");
  attr.value = id;

  // Add id
  list.setAttributeNode(attr);
  list.innerHTML = `<span class="list__title">${value}</span>
            <div class="button__group">
                <button class="edit__button">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete__button">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;
  // Select the buttons
  const editButton = list.querySelector(".edit__button");
  const deleteButton = list.querySelector(".delete__button");

  // Buttons event
  editButton.addEventListener("click", editingItem);
  deleteButton.addEventListener("click", deletingItem);

  groceryLists.appendChild(list);
}

// localStorage.setItem('shajed', JSON.stringify(['he is an asshole']));
// const gett = JSON.parse(localStorage.getItem('shajed'));
// console.log(gett)
