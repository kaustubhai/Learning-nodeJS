const itemData = require('../controllers/admin')
const Product = require('../models/product');

const getProducts = (req, res, url) => {
    const product = Product.fetchAll();
    res.render('add-product', { item: product, page: 'shop' });
}

module.exports = getProducts