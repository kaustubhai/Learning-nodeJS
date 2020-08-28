const express = require('express')

const path = require('path');
const app = express.Router();

app.get('/admin/product', (req, res, url) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

module.exports = app;