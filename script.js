// const bookTitle = document.querySelector('.title')
// const bookAuthor = document.querySelector('.author')
// const addBtn = document.querySelector('.add-btn');

const listBooks = document.querySelector('.list-book');

const collection = [];

function addBook(title, author) {
  let book = new Object(
    {
      title: title,
      author: author,
    });
    
    collection.push(book);
    console.log('', book);
}

addBook('hahah', 'okaay');
addBook('hahah', 'okaay');
addBook('hahah', 'okaay');
console.log('collection is ', collection);

document.addEventListener('DOMContentLoaded', () => {
    listBooks.innerHTML = collection.map((col, obj) => `
    <div class="${obj}">
        <p>${col.title}</p>
        <p>${col.author}</p>
        <button class="btn${obj}">Remove</button>
    </div>
    `)
})

function removeBook() {
    for (let i = 0; i <= collection.length; i++) {
        const removeBtn = document.querySelector('.btn'+i)
        removeBtn.addEventListener('click', () => {
            i.style.display = 'none'
        })
 }
}








// addBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('asasasa')
// })