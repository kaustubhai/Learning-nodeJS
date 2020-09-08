const Product = require('../models/product');

const showProducts = (req, res, url) => {
    const product = new Product(req.body.product, req.body.description, req.body.price, req.body.image)
    product.save();
    const array = [...Product.fetchAll()]
    res.render('user/product-list', {item: array})
}

module.exports = showProducts;