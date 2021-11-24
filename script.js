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

class BookShelf {
  constructor(shelf = [], container) {
    this.shelf = shelf;
    this.container = document.querySelector(container);
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.shelf.push(newBook);
    this.displayBook();
    this.setBookStorage(this.shelf);
  }

  removeBook(bookId) {
    const filterBook = this.shelf.filter((book) => parseInt((bookId), 10) !== book.id);
    this.shelf = filterBook;
    this.displayBook();
    this.setBookStorage(this.shelf);
  }

  displayBook() {
    this.container.innerHTML = this.shelf.map((text) => `
    <div>
    <p>${text.title}</p>
    <p>${text.author}</p>
    <button id="${text.id}" onclick="removeBook()">Remove</button>
    <hr>
    </div>`).join('');
  }

  setBookStorage() {
    localStorage.setItem('books', JSON.stringify(this.shelf));
  }

  getBookStorage() {
    if (localStorage.getItem('books')) {
      this.shelf = JSON.parse(localStorage.getItem('books'));
    } else {
      this.shelf = [];
    }
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
