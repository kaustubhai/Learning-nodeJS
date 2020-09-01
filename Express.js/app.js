const http = require('http');
const path = require('path')
const express = require('express');

const admin = require('./routes/admin')
const user = require('./routes/user');

const app = express();

app.set('view engine', 'pug');
app.set();

app.use(admin.route);
app.use(user);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).render('404')
});

const server = http.createServer(app);

server.listen(3000);