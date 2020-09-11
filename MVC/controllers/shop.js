const Product = require('../models/product');

const showProducts = (req, res, url) => {
    const product = new Product(req.body.product, req.body.description, req.body.price, req.body.image)
    product.save();
    const array = [...Product.fetchAll(products => {
    res.render('user/product-list', {item: products, active: 'shop'})
    })]
}

module.exports = showProducts; 