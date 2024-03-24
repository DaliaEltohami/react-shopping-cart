const express = require("express");
const product = require("../models/productModel");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  const products = await product.find();
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  const p = new product(req.body);
  const savedData = await p.save();
  res.send(savedData);
});

router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
