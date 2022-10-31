import { Book } from '/modules/books.js';

import { Data } from '/modules/data.js';

import { Actions } from '/modules/actions.js';

document.addEventListener('DOMContentLoaded', Actions.display);

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  Actions.addBook(book);
  Data.setLocalStorage(book);
  Actions.clearValues();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Actions.removeBook(e.target);
  Data.removeLocalStorage(e.target.previousElementSibling.textContent);
});

const addNew = document.getElementById('books');
const list = document.getElementById('newBooks');
const title = document.getElementById('titleSection');
const contact = document.getElementById('contactSection');

document.querySelector('#addNew').addEventListener('click', () => {
  addNew.classList = 'active';
  list.classList = 'active';
  title.classList = 'active';
  contact.classList.remove('active');
});

document.querySelector('#list').addEventListener('click', () => {
  addNew.classList.remove('active');
  list.classList.remove('active');
  title.classList.remove('active');
  contact.classList.remove('active');
});

document.querySelector('#contact').addEventListener('click', () => {
  addNew.classList.remove('active');
  list.classList = 'active';
  title.classList = 'active';
  contact.classList = ('active');
});
