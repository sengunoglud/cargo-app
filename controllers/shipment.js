const { ShipmentService } = require('../services');

async function createShipment(req, res, next) {
  try {
    const shipmentData = req.body;
    const shipment = await ShipmentService.createShipment(shipmentData);
    res.status(201).json({ shipment });
  } catch (err) {
    next(err);
  }
}

async function getShipment(req, res, next) {
  try {
    const { id } = req.params;
    const shipment = await ShipmentService.getShipmentById(id);
    res.json({ shipment });
  } catch (err) {
    next(err);
  }
}

async function updateShipment(req, res, next) {
  try {
    const { id } = req.params;
    const shipmentData = req.body;
    const shipment = await ShipmentService.updateShipmentById(id, shipmentData);
    res.json({ shipment });
  } catch (err) {
    next(err);
  }
}

async function deleteShipment(req, res, next) {
  try {
    const { id } = req.params;
    await ShipmentService.deleteShipmentById(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createShipment,
  getShipment,
  updateShipment,
  deleteShipment,
};
