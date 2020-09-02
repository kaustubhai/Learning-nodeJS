const itemData = require('../controllers/admin')

const getProducts = (req, res, url) => {
    const product = itemData.product;
    res.render('add-product', { item: product, page: 'shop' });
}

module.exports = getProducts