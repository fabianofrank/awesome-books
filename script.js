// const bookTitle = document.querySelector('.title')
// const bookAuthor = document.querySelector('.author')
// const addBtn = document.querySelector('.add-btn');

const collection = [];

function addBook(title, author) {
  let book = new Object(
    {
      title: title,
      author: author,
    });
    
    collection.push(book);
    console.log(book);
}

addBook('hahah', 'okaay');
console.log(collection);

// addBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('asasasa')
// })