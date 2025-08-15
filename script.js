
const cardBooks = document.getElementById('cardBooks');
const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  return myLibrary.push(new Book(title, author, pages, read));

};

function displayBook() {
  cardBooks.innerHTML = '';
  myLibrary.forEach(element => {
    let item = document.createElement('li');
    item.textContent = `${element.title} - ${element.author} - ${element.pages} páginas - ${element.read}`;
    cardBooks.appendChild(item);
  });
}

//função que exibe formulario adcionar livro
(function () {
  var updateButton = document.getElementById("updateDetails");
  var cancelButton = document.getElementById("cancel");
  var confirmButton = document.getElementById("confirm");
  var favDialog = document.getElementById("favDialog");

  let titleFormBook = document.getElementById("title");
  let authorFormBook = document.getElementById("author");
  let pagesFormBook = document.getElementById("pages");
  let readFormBook = document.getElementById("read");
  let notreadFormBook = document.getElementById("notread");





  // O botão Update abre uma Dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });

  confirmButton.addEventListener("click", (event)=>{
    
    addBookToLibrary(`${titleFormBook.value}`,`${authorFormBook.value}`,`${pagesFormBook.value}`, `${readFormBook.value}`||`${titleFormBook.value}`,`${authorFormBook.value}`,`${pagesFormBook.value}`, `${notreadFormBook.value}`);
    console.log('funcionou');
    event.preventDefault();
    favDialog.close();
  })
})();


addBookToLibrary('O Senhor dos Anéis', 'J.R.R. Tolkien', 1178, 'lido');
addBookToLibrary('1984', 'George Orwell', 328, 'não lido');
addBookToLibrary('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 223, 'lido');
addBookToLibrary('O Hobbit', 'J.R.R. Tolkien', 310, 'não lido');
addBookToLibrary('Dom Casmurro', 'Machado de Assis', 256, 'lido');
addBookToLibrary('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 96, 'lido');

console.log(myLibrary);

displayBook();