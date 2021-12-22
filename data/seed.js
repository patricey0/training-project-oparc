const faker = require('faker');
faker.locale = 'fr';

const users = [];

for (let i=0; i<5e5; i++) {
    users.push(
        {
            fullName: faker.name.findName(),
            email: faker.internet.email(),
            age: faker.datatype.number(100)
        }
    );