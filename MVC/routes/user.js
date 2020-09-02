const express = require('express')

const path = require('path');
const app = express.Router();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

const userInput = require('../controllers/shop')

app.get('/admin/product', userInput);

module.exports = app;