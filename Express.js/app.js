const http = require('http');
const express = require('express');

const admin = require('./routes/admin')
const user = require('./routes/user');

const app = express();

app.use(admin);
app.use(user);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 ERROR PAGE</h1>')
});

const server = http.createServer(app);

server.listen(3000);

