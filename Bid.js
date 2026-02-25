
const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  projectId: String,
  freelancerId: String,
  amount: Number,
  message: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model('Bid', bidSchema);
