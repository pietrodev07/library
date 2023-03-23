const addBookBtn = document.querySelector("#add-book-btn");
const booksContainer = document.querySelector('#books-container')
const modal = document.querySelector('#modal');
const modalForm = document.querySelector("#modal-form");
const submitBtn = document.querySelector("#submit-btn");
const overlay = document.querySelector('#overlay');

let myLibrary = [];
let newBook;

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const openModal = () => {
  modal.classList.add('active');
  overlay.classList.add('active');
}