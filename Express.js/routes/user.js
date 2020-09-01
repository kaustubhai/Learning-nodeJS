const express = require('express')

const path = require('path');
const app = express.Router();
const bodyParser = require('body-parser')
const itemData = require('./admin')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/admin/product', (req, res, url) => {
    const product = itemData.product;
    res.render('add-product', { item: product, page: 'shop' });
})
module.exports = app;