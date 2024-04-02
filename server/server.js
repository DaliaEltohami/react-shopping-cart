const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const product = require("./models/productModel");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const DB = require("./config/DB");

const app = express();
app.use(bodyParser.json());
app.use("/", productRouter);
app.use("/", orderRouter);

app.listen(3005, (req, res) => {
  console.log("Server Running on Port 3005");
});

DB();
