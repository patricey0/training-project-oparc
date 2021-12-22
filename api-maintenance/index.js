require('dotenv').config();
const express = require('express');

const router = require('./app/router');

const app = express();

const port = process.env.PORT || 5000;

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});