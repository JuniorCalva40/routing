const express = require("express");
const BooksService = require("../services/books.service");

const route = express.Router();
const service = new BooksService();

route.get("/", (req, res) => {
 
  const books = service.findAll();

  res.json(books);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newBooks = service.create(data);
  res.status(201).json(newBooks);
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateBooks = service.update(id, changes);
  res.status(201).json(updateBooks);
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteBook = service.delete(id);
  res.status(204).json(deleteBook);
});

module.exports = route;
