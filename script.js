const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')
const addBtn = document.getElementById('add-btn');
const listBooks = document.querySelector('.list-book');
const collection = [];


function handleChange() {
    addBook(bookTitle.value, bookAuthor.value);
 }
 

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleChange;
})

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

addBtn.addEventListener('click', () => {
    // e.preventDefault();
  listBooks.innerHTML = collection.map((col, obj) => `
  <div class="div-${obj}">
    <p>${col.title}</p>
    <p>${col.author}</p>
    <button class="btn-${obj}" onclick="removeBook()">Remove</button>
  </div>
  `).join('');
  handleChange;

})


addBook('booktitle', 'oeeey');
console.log('collection is ', collection);