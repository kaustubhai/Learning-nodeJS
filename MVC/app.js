const http = require('http');
const path = require('path')
const express = require('express');

const addProductRouter = require('./routes/add-product')
const shopRouter = require('./routes/shop');
const indexRouter = require('./routes/index');
const cartRouter = require('./routes/cart');
const loginRouter = require('./routes/login');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(addProductRouter);
app.use(shopRouter);
app.use(indexRouter);
app.use(cartRouter);
app.use(loginRouter);
app.use(express.static(path.join(__dirname, 'public')));

const E404 = require('./controllers/404')

app.use(E404);

const server = http.createServer(app);

server.listen(3000);