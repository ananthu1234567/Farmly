// routes/farmer.js
const express = require('express');
const router = express.Router();
const Farmer = require('../models/User'); // adjust path if needed
const authMiddleware = require('../middleware/auth'); // if you're using auth

// GET /api/farmer/profile/:id - Get a farmer profile
router.get('/profile/:id', async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id).select('-password'); // exclude password
    if (!farmer) {
      return res.status(404).json({ msg: 'Farmer not found' });
    }
    res.json(farmer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
