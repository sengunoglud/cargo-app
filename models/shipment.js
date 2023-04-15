const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  shipmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  },
  carrierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier'
  },
  priceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Price'
  },
  invoiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice'
  },
  status: {
    type: String,
    enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
