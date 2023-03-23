const addBookBtn = document.querySelector("#add-book-btn");
const booksContainer = document.querySelector('#books-container')
const modal = document.querySelector('#modal');
const modalForm = document.querySelector("#modal-form");
const submitBtn = document.querySelector("#submit-btn");
const overlay = document.querySelector('#overlay');

let myLibrary = [];
let newBook;