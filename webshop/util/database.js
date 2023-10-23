require('dotenv').config(); 

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
console.log('Password:', process.env.PASSWORD);

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://ceprnicjosip:" + process.env.PASSWORD + "@cluster0.liapsuw.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
