const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'buyer', 'admin'] },
  isActive: { type: Boolean, default: true },
  location: { type: String, required: true }, // Ensure it's a simple string (city name)
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
