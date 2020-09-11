const Cart = require('../models/cart');
const Product = require('../models/product');

const cartItems = (req, res, url) => {
    const id = req.id;
    Product.findById(id, (product) => {
        Cart.addProduct(id, product.price)
    })
    res.render('user/cart.ejs', { actice: 'cart' });
}

module.exports = cartItems;