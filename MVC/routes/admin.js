const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

const product = require('../controllers/admin')

app.post('/admin/product', product)

module.exports = app;