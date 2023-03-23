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

const closeModal = () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const getBookValues = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;

  return new Book(title, author, pages, isRead)
}

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function render() {
  const display = document.querySelector('#books-container');
  const books = document.querySelectorAll('.book-card');
  books.forEach(book => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++){
    createBookCard(myLibrary[i]);
  }
}