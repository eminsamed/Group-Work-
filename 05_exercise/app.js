let books = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    price: "10 CHF",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: "15 CHF",
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    price: "20 CHF",
  },
];

//DOM Elements
const modal = document.querySelector(".modal-container");
const openModal = document.querySelector(".add-book-btn");
const closeModal = document.querySelector(
  ".modal-close-btn"
);
const form = document.querySelector(".add-book-form");
const bookGrid = document.querySelector(".book-grid");
//open the add new book form
openModal.addEventListener("click", () => {
  modal.classList.add("active");
});
//close the form
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

//store book object in a simple array
let myLibrary = [];

// object constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

//function that can take user’s input and store the new book objects into an array.
function takeBookInfo() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = new Book(
      title.value,
      author.value,
      pages.value
    );
    //store the new object into an array.
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(book);
    //hide modal as soon as the form is submitted
    modal.classList.remove("active");
    //reset form as soon as the form is submitted
    form.reset();
    //loop through existing and new Book object in the array
    addBookToLibrary();
  });
}
takeBookInfo();

//function that loops through the array and displays each book on the page
function addBookToLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

//displays each book on the page
function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";

  const bookTitle = document.createElement("p");
  bookTitle.className = "book-title";
  bookTitle.textContent = book.title;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `by ${book.author}`;
  bookAuthor.className = "book-author";
  bookCard.appendChild(bookAuthor);
  const bookPages = document.createElement("p");
  bookPages.className = "book-pages";
  bookPages.textContent = `${book.pages} CHF`;
  bookCard.appendChild(bookPages);

  bookGrid.appendChild(bookCard);
}
