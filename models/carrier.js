const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    name: String,
    phone: String,
    email: String
  }
});

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;
