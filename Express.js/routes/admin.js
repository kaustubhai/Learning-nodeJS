const express = require('express');
const bodyParser = require('body-parser')

const app = express.Router();


app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product',(req, res, next) => {
    res.send('<form method="POST" action="/product-page"><input type="text" name="fname"><button type="submit">SEARCH</button>');
});

app.post('/product-page', (req, res, url) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = app;