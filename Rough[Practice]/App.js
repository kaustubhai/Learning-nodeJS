http = require('http');
express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hello world');
    next();
})

app.use((req, res, next) => {
    res.send('hello world')
    next();
})

app.use((req, res, next) => {
    console.log('hello world2')
})

app.listen(3000);