const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  produce: { type: mongoose.Schema.Types.ObjectId, ref: 'Produce', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered'], default: 'pending' },
  address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);