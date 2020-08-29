const express = require('express')

const path = require('path');
const app = express.Router();
const bodyParser = require('body-parser')
const itemData = require('./admin')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/admin/product', (req, res, url) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    console.log(itemData.product)
})
module.exports = app;