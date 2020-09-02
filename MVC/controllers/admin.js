products = [];

const showProducts = (req, res, url) => {
    res.setHeader('content-type', 'text/html');
    products.push(req.body.product);
    res.render('admin', {item: products})
    console.log(req)
}

module.exports = showProducts;