const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

const login = require('../controllers/login')

app.use('/login', login)

module.exports = app;