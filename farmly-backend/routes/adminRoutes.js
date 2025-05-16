const express = require('express');
const router = express.Router();
const User = require('../models/User'); // adjust path if needed

// GET all users
router.get('/users', async (req, res) => {
  console.log('GET /api/admin/users HIT');
    try {
      const users = await User.find({}, 'name email role isActive'); // select only necessary fields
      console.log('Fetched users from DB:', users); // Log users here
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server error fetching users' });
    }
  });

  router.get('/dashboard/stats', async (req, res) => {
  try {
    // Get the total number of farmers, buyers, listings, and orders
    const totalUsers = await users.countDocuments();
    // const totalBuyers = await Buyer.countDocuments();
    const totalProduce = await produce.countDocuments();
    const totalOrder = await order.countDocuments();

    // Respond with the statistics
    res.json({
      totalUsers,
      totalProduce,
      totalOrder,
      // Add any other stats you want to include
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ message: 'Server error fetching dashboard stats' });
  }
});
  


module.exports = router;
