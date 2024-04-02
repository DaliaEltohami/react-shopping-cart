const express = require("express");
const order = require("../models/orderModal");
const router = express.Router();

router.get("/api/orders/", async (req, res) => {
  const orders = await order.find();
  res.send(orders);
});

router.post("/api/orders/", async (req, res) => {
  const orderData = await order(req.body).save();
  res.send(orderData);
});

router.delete("/api/orders/:id", async (req, res) => {
  const deletedOrder = await order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
});

module.exports = router;
