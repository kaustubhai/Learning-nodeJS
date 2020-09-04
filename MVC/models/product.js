const products = [];

class Product{
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this)
    }

    static fetchAll() {
        console.log(products)
        return products;
    }
}

module.exports = Product;