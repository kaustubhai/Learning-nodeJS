const path = require('path');
const fs = require('fs');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

let cart = {totalPrice: 0, products: []}

module.exports = class Cart {
    static addProduct(id, price) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                console.log(err);
            else {
                cart = JSON.parse(fileContent);
            }
        })
        const existingProductId = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductId];
        let updatedProduct;
        if (existingProduct) {
            updatedProduct = { ...existingProduct };
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products]
            cart.products[existingProductId] = updatedProduct;
        }
        else {
            updatedProduct = { id: id, qty: 1 };
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +price;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
        });
    }
 }