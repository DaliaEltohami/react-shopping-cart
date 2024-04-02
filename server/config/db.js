const mongoose = require("mongoose");

const DB = () => {
  const connectionString = "mongodb://127.0.0.1:27017/react-shopping-cart";
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Database Connected Successfully! ");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = DB;
