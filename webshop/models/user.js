const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
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
