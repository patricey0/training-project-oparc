const client = require('../database');

class Incident {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        };
    }


    static async findAll() {
        const {rows} = await client.query('SELECT * FROM incident');
        console.log(rows);
        return rows.map(row => new Incident(row));
    }
}

module.exports = Incident;