const Product = require('../models/product');

const showProducts = (req, res, url) => {
    const product = new Product(req.body.product, req.body.description, req.body.price, req.body.image)
    product.save();
    Product.fetchAll(data =>
    {
    res.render('user/product-list', {item: data, active: 'shop'})
    });
    }


module.exports = showProducts; 