export class Data {
  static getLocalStorage() {
    let allBooks;
    if (localStorage.getItem('allBooks') === null) {
      allBooks = [];
    } else {
      allBooks = JSON.parse(localStorage.getItem('allBooks'));
    }
    return allBooks;
  }

  static setLocalStorage(book) {
    const allBooks = Data.getLocalStorage();
    allBooks.push(book);
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
  }

  static removeLocalStorage(author) {
    const allBooks = Data.getLocalStorage();

    allBooks.forEach((book, index) => {
      if (book.author === author) {
        allBooks.splice(index, 1);
      }
    });

    localStorage.setItem('allBooks', JSON.stringify(allBooks));
  }
}