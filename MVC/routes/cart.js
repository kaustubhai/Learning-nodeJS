const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

const cart = require('../controllers/cart')

app.use('/cart', cart)

module.exports = app;