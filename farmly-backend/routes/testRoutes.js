const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Produce = require("../models/Produce");
const Order = require("../models/Order");
const Notification = require("../models/Notification");

// Create test documents
router.post("/seed", async (req, res) => {
  try {
    const user = new User({ name: "Alice", email: "alice@test.com", password: "123456" });
    await user.save();

    const produce = new Produce({ name: "Tomato", quantity: 100, price: 20, farmer: user._id });
    await produce.save();

    const order = new Order({ buyer: user._id, produce: produce._id, quantity: 10, status: "pending" });
    await order.save();

    const notification = new Notification({ user: user._id, type: "order", message: "New order placed." });
    await notification.save();

    res.json({ user, produce, order, notification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Seeding failed" });
  }
});

module.exports = router;
