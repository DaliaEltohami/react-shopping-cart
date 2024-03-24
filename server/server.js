const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const product = require("./models/productModel");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

app.listen(3005, (req, res) => {
  console.log("Server Running on Port 3005");
});

const connectionString = "mongodb://127.0.0.1:27017/react-shopping-cart";

mongoose
  .connect(connectionString)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
