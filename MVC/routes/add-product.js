const express = require('express')

const path = require('path');
const app = express.Router();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

const userInput = require('../controllers/add-product')

app.get('/admin/add-product', userInput);

module.exports = app;