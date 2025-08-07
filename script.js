const crypto = require("crypto");

const MyLibrary =[];

function Book(title,author,pages,read){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
};


Book.prototype.addBooktoLibrary = function(){
    return `${this.id} ${this.title} ${this.author} ${this.pages} ${this.read}`;
}
const teste = new Book('nome','author','paginas','lido');
const teste2 = new Book('nome2','author2','paginas2','nãolido');


MyLibrary.push(teste.addBooktoLibrary())


console.log(MyLibrary);