// const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const errorController = require("./controllers/error");
const db = require("./util/database");

const AdminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0],result[1]);
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", AdminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);
