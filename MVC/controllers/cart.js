// const Cart = require('../models/cart')

const cartItems = (req, res, url) => {
    res.render('user/cart.ejs', { actice: 'cart' });
}

module.exports = cartItems;