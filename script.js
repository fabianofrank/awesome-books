/* eslint-disable no-unused-vars */
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksContainer = document.querySelector('.books-container');
const getLocalBooks = localStorage.getItem('books');
const localBooks = JSON.parse(getLocalBooks);
let booksCollection = getLocalBooks ? localBooks : [];

function addBook(title, author) {
  const book = {
    title,
    author,
    id: parseInt((Math.random() * 1000000000), 10),
  };
  booksCollection.push(book);
  localStorage.setItem('books', JSON.stringify(booksCollection));
}

function handleChange() {
  addBook(bookTitle.value, bookAuthor.value);
}

function removeBook() {
  const bookClass = window.event.target.className.split('-')[1];
  document.querySelector(`.div-${bookClass}`).style.display = 'none';
  const bookId = window.event.target.id;
  const newbooksCollection = booksCollection.filter((book) => book.id !== parseInt((bookId), 10));
  booksCollection = newbooksCollection;
  localStorage.setItem('books', JSON.stringify(newbooksCollection));
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  booksContainer.innerHTML = booksCollection.map((col, obj) => `
  <div class="div-${obj}">
  <p>${col.title}</p>
  <p>${col.author}</p>
  <button class="btn-${obj}" id="${col.id}" onclick="removeBook()">Remove</button>
  <hr>
  </div>`).join('');
  bookTitle.value = '';
  bookAuthor.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  booksContainer.innerHTML = booksCollection.map((col, obj) => `<div class="div-${obj}">
  <p>${col.title}</p>
  <p>${col.author}</p>
  <button class="btn-${obj}" id="${col.id}" onclick="removeBook()">Remove</button>
  <hr>
  </div>`).join('');
});
