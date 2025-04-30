const mongoose = require('mongoose');


const produceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  unit: { type: String, default: 'kg' },
  images: [{ type: String }],
  available: { type: Boolean, default: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Produce', produceSchema);
