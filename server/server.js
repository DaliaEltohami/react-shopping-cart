require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const DB = require("./config/db");

const app = express();

app.use(bodyParser.json());
DB();
app.use("/", productRouter);
app.use("/", orderRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("public"));
  app.get("/", (req, res) => {
    res.send(__dirname + "/public/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("API Running");
  });
}

const PORT = process.env.PORT || 3005;
app.listen(PORT, (req, res) => {
  console.log("Server Running on Port 3005");
});
