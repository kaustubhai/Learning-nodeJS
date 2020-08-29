const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

let products = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/admin/product', (req, res, url) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
    products.push({title: req.body.product});
})

exports.route = app;
exports.product = products; 