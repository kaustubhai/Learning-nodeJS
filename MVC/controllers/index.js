const error404 = (req, res, next) => {
    res.render('user/index', {active: 'home'})
}

module.exports = error404