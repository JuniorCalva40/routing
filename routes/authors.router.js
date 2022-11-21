const express = require('express');
const {faker} = require('@faker-js/faker')

const route = express.Router();

route.get('/', (req, res)=> {
    const {size} = req.query
    const limit = size || 10;
    const authors =[];
    for (let i = 0; i < limit; i++) {
        authors.push({
            id : faker.datatype.uuid(),
            name: faker.person.firstName(),
            lastName:faker.person.LastName()
        });
        
    }
    res.json(authors);   
});

module.exports = route