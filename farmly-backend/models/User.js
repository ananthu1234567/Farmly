const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'buyer', 'admin'], default: 'farmer' },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] },
  },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

userSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('User', userSchema);
