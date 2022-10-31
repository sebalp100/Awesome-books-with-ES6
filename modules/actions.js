class Data {
  static getLocalStorage() {
    let allBooks;
    if (localStorage.getItem('allBooks') === null) {
      allBooks = [];
    } else {
      allBooks = JSON.parse(localStorage.getItem('allBooks'));
    }
    return allBooks;
  }
}

export class Actions {
  static display() {
    const books = Data.getLocalStorage();

    books.forEach((book) => Actions.addBook(book));
  }

  static addBook(book) {
    if (book.title !== undefined) {
      const list = document.querySelector('#book-list');
      const newRow = document.createElement('tr');

      newRow.innerHTML = `
        <li>"${book.title}"</li>
        <li>${'by'}</li>
        <li>${book.author}</li>
        <button class="remove">Remove</button>
        `;

      list.appendChild(newRow);
    }
  }

  static removeBook(element) {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  }

  static clearValues() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}