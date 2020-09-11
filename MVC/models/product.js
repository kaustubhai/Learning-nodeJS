const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

class Product{
    constructor(title, description, price, image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image
    }

    save() {
        this.id = Math.random();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}

module.exports = Product;