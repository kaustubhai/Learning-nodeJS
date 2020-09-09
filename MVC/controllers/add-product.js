const getProducts = (req, res, url) => {
    res.render('admin/add-product', {active: 'add'});
}

module.exports = getProducts