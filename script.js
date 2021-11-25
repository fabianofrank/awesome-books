/* eslint-disable max-classes-per-file */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const bookList = document.querySelector('.book-list');
const addBookForm = document.querySelector('.add-book-form');
const contactInfo = document.querySelector('.contact-info');
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');


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
    <div class="book-class">
    <article>
    <p>"${text.title}" by ${text.author}</p>
    </article>
    <button id="${text.id}" onclick="removeThisBook()">Remove</button>
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

const myShelf = new BookShelf([], '.books-container');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myShelf.addBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = '';
  bookAuthor.value = '';
});

function removeThisBook() {
  const remove = window.event.target.id;
  myShelf.removeBook(remove);
}

document.addEventListener('DOMContentLoaded', () => {
  myShelf.getBookStorage();
  myShelf.displayBook();
  removeThisBook();
});

listBtn.addEventListener('click', () => {
	bookList.classList.add('show');
	bookList.classList.remove('hide');
	addBookForm.classList.add('hide');
	addBookForm.classList.remove('show');
	contactInfo.classList.add('hide');
	contactInfo.classList.remove('show');
});

addNewBtn.addEventListener('click', () => {
	addBookForm.classList.add('show');
	addBookForm.classList.remove('hide');
	bookList.classList.add('hide');
	bookList.classList.remove('show');
	contactInfo.classList.add('hide');
	contactInfo.classList.remove('show');
});

contactBtn.addEventListener('click', () => {
	contactInfo.classList.add('show');
	contactInfo.classList.remove('hide');
	addBookForm.classList.add('hide');
	addBookForm.classList.remove('show');
	bookList.classList.add('hide');
	bookList.classList.remove('show');
});
