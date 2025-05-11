const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
const { verifyToken } = require('../middleware/authMiddleware');


// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  const { name, email, password, location, role } = req.body;

  if (!name || !email || !password || !location || !role) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, location, role });
    await user.save();

    res.status(201).json({ msg: "User registered successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error." });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Email and password are required." });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error." });
  }
});

// GET /api/auth/getRole
router.get('/api/auth/getRole', verifyToken, async (req, res) => {
    try {
      // Find the user by their ID (from the decoded token)
      const user = await User.findById(req.user.id).select('role');
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json({ role: user.role });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  });

module.exports = router;
