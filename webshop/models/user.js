const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }
  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex( cp => {
    //   return cp._id === product._id;
    // })

    const updatedCart = { items: [{ productId: new ObjectId(product._id), quantity: 1 }] };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .toArray() // Convert cursor to an array
      .then((users) => {
        if (users.length === 0) {
          return null; // User not found
        }
        return users[0]; // Return the first user found (assuming the ID is unique)
      })
      .catch((err) => console.error(err));
  }
}

module.exports = User;
