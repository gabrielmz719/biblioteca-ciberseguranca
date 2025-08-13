
const cardBooks = document.getElementById('cardBooks');
const myLibrary = [];

function Book(title , author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(title , author, pages, read) {
  // take params, create a book then store it in the array
  return myLibrary.push(new Book(title, author, pages, read));

};

function displayBook(){
  cardBooks.innerHTML = '';
   myLibrary.forEach(element =>{
    let item =  document.createElement('li');
    item.textContent = `${element.title} - ${element.author} - ${element.pages} páginas - ${element.read}`;
    cardBooks.appendChild(item);
  });
}

addBookToLibrary('teste1','author1','220','não lido');
addBookToLibrary('teste2','author2','220','não lido');

displayBook();
