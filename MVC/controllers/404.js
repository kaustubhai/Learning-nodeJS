const error404 = (req, res, next) => {
    res.status(404).render('404', {active: 'na'})
}

module.exports = error404