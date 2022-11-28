const { faker } = require("@faker-js/faker");

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 20; i++) {
      this.users.push({
        userId: i + 1,
        name: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
      });
    }
  }

  findAll() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((user) => user.userId === parseInt(id));
  }

  create(data) {
    this.users.push(data);
    const userIndex = this.users.length - 1;
    return {
      message: "Created",
      data: this.users[userIndex],
    };
  }

  update(id, changes) {
    const index = this.users.findIndex((user) => user.userId === parseInt(id));
    this.users.fill(changes, index, index + 1);
    return {
      message: "Updated",
      data: this.users[index],
    };
  }

  delete(id) {
    const index = this.users.findIndex((user) => user.userId === parseInt(id));
    return {
      message: "Deleted",
      data: this.users.splice(index, 1),
    };
  }
}

module.exports = UsersService;
