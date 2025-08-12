const crypto = require("crypto");
const { prototype } = require("events");

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




addBookToLibrary('teste1','author1','220','não lido');

console.log(myLibrary);