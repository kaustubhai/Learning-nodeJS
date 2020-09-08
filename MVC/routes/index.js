const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

const index = require('../controllers/index')

app.use('/home', index)

module.exports = app;