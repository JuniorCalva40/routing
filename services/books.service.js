const { faker } = require("@faker-js/faker");

class BooksService {
  constructor() {
    this.books = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 20; i++) {
      this.books.push({
        id: i + 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      });
    }
  }

  findAll() {
    return this.books;
  }

  findOne(id) {
    return this.books.find((book) => book.id === parseInt(id));
  }

  create(data) {
    this.books.push(data);
    const bookIndex = this.books.length - 1;
    return {
      message: "Created",
      data: this.books[bookIndex],
    };
  }

  update(id, changes) {
    const index = this.books.findIndex((book) => book.id === parseInt(id));
    this.books.fill(changes, index, index + 1);
    return {
      message: "Updated",
      data: this.books[index],
    };
  }

  delete(id) {
    const index = this.books.findIndex((book) => book.id === parseInt(id));
    return {
      message: "Deleted",
      data: this.books.splice(index, 1),
    };
  }
}

module.exports = BooksService;
