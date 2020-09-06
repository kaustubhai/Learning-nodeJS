const http = require('http');
const path = require('path')
const express = require('express');

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRouter);
app.use(userRouter);
app.use(express.static(path.join(__dirname, 'public')));

const E404 = require('./controllers/404')

app.use(E404);

const server = http.createServer(app);

server.listen(3000);