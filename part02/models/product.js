const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    const p = path.join(__dirname, "..", "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error(err);
        return; 
      }

      let products = [];
      if (fileContent.length > 0) {
        try {
          products = JSON.parse(fileContent);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return; 
        }
      }

      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(__dirname, "..", "data", "products.json"); 
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error(err);
        cb([]); 
        return;
      }

      let products = [];
      if (fileContent.length > 0) {
        try {
          products = JSON.parse(fileContent);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          cb([]);
          return;
        }
      }

      cb(products);
    });
  }
};
