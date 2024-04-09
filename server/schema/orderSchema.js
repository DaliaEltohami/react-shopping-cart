const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
  title: String,
  desc: String,
  imageURL: String,
  price: Number,
  size: [String],
  qty: Number,
});

const orderSchema = new mongoose.Schema(
  { name: String, email: String, cartItems: [cartItemSchema] },
  { timestamps: true }
);

module.exports = orderSchema;
