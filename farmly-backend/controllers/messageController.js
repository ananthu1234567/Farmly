const Message = require('../models/Message'); // This should now correctly import the model
const mongoose = require('mongoose');

const sendMessage = async (senderId, recipientId, content, io) => {
  try {
    const sender = new mongoose.Types.ObjectId(senderId);
    const recipient = new mongoose.Types.ObjectId(recipientId);

    const message = new Message({
      sender,
      recipient,
      content,
    });

    await message.save();

    io.emit('newMessage', message);
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw error;
  }
};

module.exports = { sendMessage };
