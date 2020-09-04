const Product = require('../models/product');

const showProducts = (req, res, url) => {
    res.setHeader('content-type', 'text/html');
    const product = new Product(req.body.product)
    product.save();
    const array = [...Product.fetchAll()]
    res.render('admin', {item: array})
}

module.exports = showProducts;