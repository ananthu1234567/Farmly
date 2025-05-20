const express = require('express');
const router = express.Router();
const Buyer = require('../models/User'); // adjust path if needed
const authMiddleware = require('../middleware/auth'); // if you're using auth
const Order = require('../models/Order'); // adjust path if needed
const Produce = require('../models/Produce'); // adjust path if needed

router.get('/listings', async (req, res) => {
  try {
    const allProduce = await Produce.find()
      .populate('farmer', 'name location') // optional: include farmer info
      .sort({ createdAt: -1 });
      

    res.status(200).json(allProduce);
  } catch (error) {
    console.error('Error fetching all produce for buyers:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;