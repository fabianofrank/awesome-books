const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')
const addBtn = document.getElementById('add-btn');
const listBooks = document.querySelector('.list-book');
const collection = [];

function addBook(title, author) {
  let book = new Object(
    {
      title: title,
      author: author,
    });
    collection.push(book);
}

function removeBook() {
  const rem = window.event.target.className.split('-')[1];
  document.querySelector(`.div-${rem}`).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  listBooks.innerHTML = collection.map((col, obj) => `
  <div class="div-${obj}">
    <p>${col.title}</p>
    <p>${col.author}</p>
    <button class="btn-${obj}" onclick="removeBook()">Remove</button>
  </div>
  `).join('');
})

function handleChange() {
   addBook(bookTitle.value, bookAuthor.value);
}

addBtn.addEventListener("click", handleChange)

addBook('booktitle', 'oeeey');
console.log('collection is ', collection);