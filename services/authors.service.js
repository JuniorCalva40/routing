const { faker } = require("@faker-js/faker");

class AuthorsService {
  constructor() {
    this.authors = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 20; i++) {
      this.authors.push({
        authorId: i + 1,
        name: faker.name.fullName(),
        secondLastName: faker.name.lastName(),
        sex: faker.name.sexType(),
        birthdate: faker.date.birthdate()
      });
    }
  }

  findAll() {
    return this.authors;
  }

  findOne(id) {
    return this.authors.find((author) => author.authorId === parseInt(id));
  }

  create(data) {
    this.authors.push(data);
    const authorIndex = this.authors.length - 1;
    return {
      message: "Created",
      data: this.authors[authorIndex],
    };
  }

  update(id, changes) {
    const index = this.authors.findIndex(
      (author) => author.authorId === parseInt(id)
    );
    this.authors.fill(changes, index, index + 1);
    return {
      message: "Updated",
      data: this.authors[index],
    };
  }

  delete(id) {
    const index = this.authors.findIndex(
      (author) => author.authorId === parseInt(id)
    );
    return {
      message: "Deleted",
      data: this.authors.splice(index, 1),
    };
  }
}

module.exports = AuthorsService;
