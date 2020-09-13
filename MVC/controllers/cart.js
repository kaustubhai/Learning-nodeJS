const Cart = require('../models/cart');
const Product = require('../models/product');

const cartItems = (req, res, url) => {
    const id = req.body.id;
    Cart.addProduct(id);
    res.render('user/cart.ejs', { actice: 'cart' });
}

module.exports = cartItems;