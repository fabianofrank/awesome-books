/* eslint-disable no-unused-vars */
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksContainer = document.querySelector('.books-container');
const getLocalBooks = localStorage.getItem('books');
const localBooks = JSON.parse(getLocalBooks);
let booksCollection = getLocalBooks ? localBooks : [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = parseInt((Math.random() * 1000000000), 10);
  }
}

class BookShelf{
  constructor(shelf = [], container) {
    this.shelf = shelf;
    this.container = document.querySelector(container);
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    
  }

}



class Books {
  constructor() {
    this.booksCollection = [];
  }

  addBook(title, author) {
    this.title = title;
    this.author = author;
    this.id = parseInt((Math.random() * 1000000000), 10);
  }

  removeBook(bookID) {
    const bookClass = window.event.target.className.split('-')[1];
    document.querySelector(`.div-${bookClass}`).style.display = 'none';
    const bookId = window.event.target.id;
    const newbooksCollection = booksCollection.filter((book) => book.id !== parseInt((bookId), 10));
    booksCollection = newbooksCollection;
    localStorage.setItem('books', JSON.stringify(newbooksCollection));
  }

  // getter method
  handleChange() {
    addBook(bookTitle.value, bookAuthor.value);
    this.booksCollections.push();
    localStorage.setItem('this', JSON.stringify(booksCollection));
  }
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
