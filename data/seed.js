const faker = require('faker');
faker.locale = 'fr';

const users = [];

for (let i=0; i<10; i++) {
    users.push(

        
        {
            public_name: faker.name.findName(),
            capacity: faker.internet.email(),
            open_time: faker.datatype.number(100),
            close_time,
            duration
        }
    );