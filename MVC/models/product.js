const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'products.json');
const c = path.join(__dirname, '..', 'data', 'cart.json');

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
      this.id = Math.random().toString();
      fs.readFile(p, (err, fileContent) => {
        if (err)
          console.log(err)
        else {
          const data = JSON.parse(fileContent);
          data.push(this);
          if(data[data.length-1].name != data[data.length-2].name && data[data.length-1].description != data[data.length-2].description){
          fs.writeFile(p, JSON.stringify(data), err => {
            console.log(err);
          })
          }
          else {
            console.log('File already exist')
          }
        }
      })
        // getProductsFromFile(products => {
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), err => {
        //         console.log(err);
        //     })
        // })
    }

    static fetchAll(cb) {
      getProductsFromFile(cb)
  }

  findById(id) {
    fs.readFile(c, (err, fileContent) => {
      if (err)
        console.log(err);
      else{
        const data = JSON.parse(fileContent);
        data.forEach(item => {
          if (item.id === id)
            return true
        })
      }
      })
    }
}

module.exports = Product;