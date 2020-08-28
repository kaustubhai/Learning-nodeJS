const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express.Router();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/admin/product', (req, res, url) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
})

module.exports = app;