const products = [];

class Product{
    constructor(title, description, price, image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image
    }

    save() {
        products.push(this)
    }

    static fetchAll() {
        return products;
    }
}

module.exports = Product;