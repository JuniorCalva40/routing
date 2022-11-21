const express = require('express');
const {faker} = require('@faker-js/faker')

const route = express.Router();

route.get('/', (req, res)=> {
    const {size} = req.query
    const limit = size || 10;
    const clients =[];
    for (let i = 0; i < limit; i++) {
        clients.push({
            clientsID : faker.datatype.uuid(),
            avatar: faker.image.avatar(),
            name: faker.person.firstName()
            
        });
        
    }
    res.json(clients);   
});

module.exports = route