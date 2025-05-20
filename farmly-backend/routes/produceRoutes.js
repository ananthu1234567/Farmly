const express = require('express');
const router = express.Router();
const Produce = require('../models/Produce');
const { verifyFarmer } = require('../middleware/auth'); // ensure farmer is authenticated

// POST: Add new produce
router.post('/produce', verifyFarmer, async (req, res) => {
  try {
    const { title, description, category, quantity, price, unit, images } = req.body;

    const newProduce = new Produce({
      title,
      description,
      category,
      quantity,
      price,
      unit: unit || 'kg',
      images: images || [],
      farmer: req.user.id // assuming req.user is set by auth middleware
    });

    const saved = await newProduce.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error adding produce:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET: Get all produce for the logged-in farmer
router.get('/produce', verifyFarmer, async (req, res) => {
  try {
    const produceList = await Produce.find({ farmer: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(produceList);
   
  } catch (error) {
    console.error('Error fetching produce:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
