const express = require('express');
const {faker} = require('@faker-js/faker')

const route = express.Router();

route.get('/', (req, res)=> {
    const {size} = req.query
    const limit = size || 10;
    const books =[];
    for (let i = 0; i < limit; i++) {
        books.push({
            booksID : faker.datatype.uuid(),
            price: faker.commerce.price(),
            name:faker.commerce.productName()
        });
        
    }
    res.json(books);   
});

module.exports = route