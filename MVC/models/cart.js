class Cart {
    static addProduct(price, id) {
        cart = { items: [], price: 0 };
        const existingProductId = cart.items.findIndex(item => item.id === id)
        const existingProduct = cart[existingProductId];
        if (existingProduct) {
            const updateProduct = { ...existingProduct }; 
            updateProduct.qty += 1;
            cart.items = [...cart.items];
            cart.items[existingProductId] = updateProduct;
        }
        else {
            updateProduct = { id: 1, qty: 1 };
            cart.items = [...cart.items, updateProduct];
        }
        cart.price += +price;
        console.log(cart);
     }
}
 
module.exports = Cart;