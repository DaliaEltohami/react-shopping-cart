const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  desc: String,
  imageURL: String,
  price: Number,
  size: [String],
});

module.exports = productSchema;
