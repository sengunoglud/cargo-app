const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  shipmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  issuedDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
