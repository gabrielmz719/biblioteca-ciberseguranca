
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
    let card = document.createElement('div');
    card.classList.add('book-card');//adciona uma classe ao card

    let title = document.createElement('h3');
    title.textContent = element.title;

    let author = document.createElement('p');
    author.textContent = `Author: ${element.author}`;

    let pages = document.createElement('p');
    pages.textContent = `Pages: ${element.pages}`;

    let status = document.createElement('p');
    status.textContent = `Status: ${element.read}`;


    //buttons 
    // criando botao delete item
    let buttonDelete = document.createElement('button');
    //criando botão para marcar lido
    let buttonEditRead = document.createElement('button');

    buttonDelete.textContent = 'Delete';
    buttonEditRead.textContent = 'Read';



    let actions = document.createElement('div');//container pros botões
    actions.classList.add('card-actions');

    actions.appendChild(buttonDelete);

    // caso o livro tenha sido não tenha sido lido vai aparecer um botão para mudar de não lido para lido
    if (element.read === 'Not Read') {
      actions.appendChild(buttonEditRead);
    }


    //montar card 
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(actions);

    cardBooks.appendChild(card);



    Book.prototype.toggleRead = function () {// basicamente cria um novo prototype pra book e coloca uma função nele que substiyui o notread para read
      this.read = "Read";
    };


    buttonEditRead.addEventListener("click", () => {
      element.toggleRead();  //ativa a função que troca o lido para nn lido no elemento do html  
      displayBook();
    });

    buttonDelete.addEventListener("click", function deleteBook() {
      // serve para capturar o id do objeto
      let index = myLibrary.findIndex(item => item.id === element.id);

      alert(`O livro ${element.title} foi deletado deletado!`);

      // o splice pega aquele index maldito que fiz e remove o id selecionado 2 dias pra descobrir essa merda
      myLibrary.splice(index, 1);
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


addBookToLibrary('Sistemas Operacionais Modernos', ' Andrew S. Tanenbaum', 864, 'lido');
addBookToLibrary('Caça a Bugs no Mundo Real: Um Guia de Campo para Hacking na Web', 'Pedro YaworskiPedro Yaworski', 264, 'não lido');
addBookToLibrary('Redes de Computadores', 'Andrew S. Tanenbaum', 624, 'não lido');


displayBook();