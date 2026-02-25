
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  clientId: String,
  status: { type: String, default: "open" }
});

module.exports = mongoose.model('Project', projectSchema);
