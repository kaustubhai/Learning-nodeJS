const express = require('express')

const app = express.Router();

app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});


module.exports = app;