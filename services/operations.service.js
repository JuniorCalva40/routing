const { faker } = require("@faker-js/faker");

class OperationsService {
  constructor() {
    this.operations = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 20; i++) {
      this.operations.push({
        operationId: i + 1,
        totalBooks: faker.helpers.arrayElement(['1', '2','3','4','5','6','7']),
        estado: faker.helpers.arrayElement(['En venta', 'Comprado']),
        
      });
    }
  }

  findAll() {
    return this.operations;
  }

  findOne(id) {
    return this.operations.find(
      (operation) => operation.operationId === parseInt(id)
    );
  }

  create(data) {
    this.operations.push(data);
    const operationIndex = this.operations.length - 1;
    return {
      message: "Created",
      data: this.operations[operationIndex],
    };
  }

  update(id, changes) {
    const index = this.operations.findIndex(
      (operation) => operation.operationId === parseInt(id)
    );
    this.operations.fill(changes, index, index + 1);
    return {
      message: "Updated",
      data: this.operations[index],
    };
  }

  delete(id) {
    const index = this.operations.findIndex(
      (operation) => operation.operationId === parseInt(id)
    );
    return {
      message: " Deleted",
      data: this.operations.splice(index, 1),
    };
  }
}

module.exports = OperationsService;
