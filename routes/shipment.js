const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipment');

// Route for creating a new shipment
router.post('/', shipmentController.createShipment);

// Route for getting all shipments
router.get('/', shipmentController.getAllShipments);

// Route for getting a single shipment by ID
router.get('/:shipmentId', shipmentController.getShipmentById);

// Route for updating a shipment by ID
router.put('/:shipmentId', shipmentController.updateShipmentById);

// Route for deleting a shipment by ID
router.delete('/:shipmentId', shipmentController.deleteShipmentById);

module.exports = router;
