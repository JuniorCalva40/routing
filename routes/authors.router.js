const express = require("express");
const AuthorsService = require("../services/authors.service");

const route = express.Router();
const service = new AuthorsService();

route.get("/", (req, res) => {
  const authors = service.findAll();

  res.json(authors);
});

// Get post Put and Delete

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findOne(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newAuthor = service.create(data);
  res.status(201).json(newAuthor);
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateAuthor = service.update(id, changes);
  res.status(201).json(updateAuthor);
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteAuthor = service.delete(id);
  res.status(204).json(deleteAuthor);
});

module.exports = route;
