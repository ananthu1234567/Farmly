const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyFarmer = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || user.role !== 'farmer') {
      return res.status(403).json({ message: 'Forbidden - Not a farmer' });
    }
    req.user = { id: user._id, role: user.role };
    next();
  } catch (error) {
    console.error('JWT Error:', error);
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = { verifyFarmer };
