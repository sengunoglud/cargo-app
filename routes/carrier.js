const express = require('express');
const router = express.Router();
const carrierService = require('../services/carrier');

router.get('/', async (req, res) => {
  const carriers = await carrierService.getAllCarriers();
  res.json(carriers);
});

router.get('/:id', async (req, res) => {
  const carrier = await carrierService.getCarrierById(req.params.id);
  res.json(carrier);
});

router.post('/', async (req, res) => {
  const newCarrier = await carrierService.createCarrier(req.body);
  res.json(newCarrier);
});

router.put('/:id', async (req, res) => {
  const updatedCarrier = await carrierService.updateCarrier(req.params.id, req.body);
  res.json(updatedCarrier);
});

router.delete('/:id', async (req, res) => {
  await carrierService.deleteCarrier(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
