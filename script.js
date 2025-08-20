
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
    // criando botao delete item
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Deletar';
    
    // serve para capturar o id do objeto
    let index = myLibrary.findIndex(item => item.id === element.id);

    let item = document.createElement('li');
    item.textContent = `${element.title} - ${element.author} - ${element.pages} pages - ${element.read}-`;
    cardBooks.appendChild(item);
    item.appendChild(buttonDelete);

    buttonDelete.addEventListener("click", function deletar() {

      alert(`item ${element.id} ${element.title} deletado`);

      // o splice pega aquele index maldito que fiz e remove o id selecionado 2 dias pra descobrir essa merda
      myLibrary.splice(index,1);
      console.log(myLibrary);
      displayBook();

    });
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

  // O botão Update abre uma Dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });


  confirmButton.addEventListener("click", (event) => {
    const selectRead = document.getElementById('selectRead').value;
    if (titleFormBook.value == '' || authorFormBook.value == '' || pagesFormBook.value == '') {
      alert('Por favor preencha os dados corretamente !');
    } else {
      addBookToLibrary(titleFormBook.value, authorFormBook.value, pagesFormBook.value, selectRead);

      console.log('funcionou');
      event.preventDefault();

      //limpar campos após enviar form
      document.getElementById('formBook').reset();

      //fechar janela
      favDialog.close();

      console.log(myLibrary);

      displayBook();

    }
  })
})();


addBookToLibrary('O Senhor dos Anéis', 'J.R.R. Tolkien', 1178, 'lido');
addBookToLibrary('1984', 'George Orwell', 328, 'não lido');
addBookToLibrary('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 223, 'lido');
addBookToLibrary('O Hobbit', 'J.R.R. Tolkien', 310, 'não lido');
addBookToLibrary('Dom Casmurro', 'Machado de Assis', 256, 'lido');
addBookToLibrary('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 96, 'lido');

displayBook();



