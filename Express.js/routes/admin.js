const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

let products = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/admin/product', (req, res, url) => {
    
    res.setHeader('content-type','text/html');
    res.render('admin', {item: req.body.product})
    console.log(req)
    
})
exports.route = app;
exports.product = products; 