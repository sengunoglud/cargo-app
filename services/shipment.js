const Shipment = require('../models/shipment');

class ShipmentService {
  static async createShipment(shipmentData) {
    try {
      const shipment = new Shipment(shipmentData);
      await shipment.save();
      return shipment;
    } catch (err) {
      throw new Error(`Error creating shipment: ${err.message}`);
    }
  }

  static async getShipment(shipmentId) {
    try {
      const shipment = await Shipment.findById(shipmentId);
      if (!shipment) {
        throw new Error('Shipment not found');
      }
      return shipment;
    } catch (err) {
      throw new Error(`Error getting shipment: ${err.message}`);
    }
  }

  static async updateShipment(shipmentId, shipmentData) {
    try {
      const shipment = await Shipment.findById(shipmentId);
      if (!shipment) {
        throw new Error('Shipment not found');
      }
      Object.assign(shipment, shipmentData);
      await shipment.save();
      return shipment;
    } catch (err) {
      throw new Error(`Error updating shipment: ${err.message}`);
    }
  }

  static async deleteShipment(shipmentId) {
    try {
      const shipment = await Shipment.findById(shipmentId);
      if (!shipment) {
        throw new Error('Shipment not found');
      }
      await shipment.remove();
    } catch (err) {
      throw new Error(`Error deleting shipment: ${err.message}`);
    }
  }

  static async listShipments() {
    try {
      const shipments = await Shipment.find();
      return shipments;
    } catch (err) {
      throw new Error(`Error listing shipments: ${err.message}`);
    }
  }
}

module.exports = ShipmentService;
