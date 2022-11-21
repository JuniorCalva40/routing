const express = require('express');
const {faker} = require('@faker-js/faker')

const route = express.Router();

route.get('/', (req, res)=> {
    const {size} = req.query
    const limit = size || 10;
    const users =[];
    for (let i = 0; i < limit; i++) {
        users.push({
            Usersid : faker.datatype.uuid(),
            avatar: faker.image.avatar(),
            name: faker.person.firstName(),
            mail:faker.internet.email(),
            password: faker.internet.password()
        });
        
    }
    res.json(users);   
});

module.exports = route