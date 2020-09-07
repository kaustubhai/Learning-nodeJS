const Product = require('../models/product');

const showProducts = (req, res, url) => {
    if (extension === 'html') res.setHeader("Content-Type". text/html);
    else if (extension === 'htm') res.set("Content-Type". text/html);
    else if (extension === 'css') res.set("Content-Type". text/css);
    else if (extension === 'js') res.set("Content-Type". text/javascript);
    else if (extension === 'png') res.set("Content-Type". image/png);
    else if (extension === 'jpg') res.set("Content-Type". image/jpg);
    else if (extension === 'jpeg') res.set("Content-Type". image/jpeg);
    const product = new Product(req.body.product, req.body.description, req.body.price)
    product.save();
    const array = [...Product.fetchAll()]
    res.render('user/product-list', {item: array})
}

module.exports = showProducts;