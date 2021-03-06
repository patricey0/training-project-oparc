require('dotenv').config();
const express = require('express');
const pug = require('pug');

const router = require('./app/router');

const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'pug');
app.set('views', './app/integration/views');
app.use(express.static('./app/integration/'));

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});