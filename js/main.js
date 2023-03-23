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

const createBookCard = (item) => {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const removeBookBtn = document.createElement('button');
  const isReadBtn = document.createElement('button');
  
  bookCard.classList.add('book-card');
  bookCard.setAttribute('id', myLibrary.indexOf(item));
  
  title.textContent = item.title;
  bookCard.appendChild(title);
  
  author.textContent = item.author;
  bookCard.appendChild(author);

  let pagesText;

  if(item.pages == 1) {
    pagesText = 'page';
  } else {
    pagesText = 'pages';
  }

  pages.textContent = `${item.pages} ${pagesText}`;
  bookCard.appendChild(pages);
  
  isReadBtn.classList.add('btn')    
  bookCard.appendChild(isReadBtn);
  
  if(item.isRead) {
    isReadBtn.textContent = 'Read';
    isReadBtn.classList.add('isReadTrue-btn');
  }else {
    isReadBtn.textContent = 'Not Read';
    isReadBtn.classList.add('isReadFalse-btn');
  }
  
  removeBookBtn.textContent = 'Remove'; 
  removeBookBtn.classList.add('btn');
  removeBookBtn.classList.add('remove-book-btn');
  removeBookBtn.setAttribute('id', 'remove-book-btn');
  bookCard.appendChild(removeBookBtn);
  
  booksContainer.appendChild(bookCard);

  removeBookBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(item),1);
      setData()
      render();
  });

  isReadBtn.addEventListener('click', () => { 
      item.isRead = !item.isRead; 
      setData(); 
      render();
  }); 
}