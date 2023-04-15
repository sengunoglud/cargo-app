const { CarrierService } = require('../services');

async function createCarrier(req, res, next) {
  try {
    const carrierData = req.body;
    const carrier = await CarrierService.createCarrier(carrierData);
    res.status(201).json({ carrier });
  } catch (err) {
    next(err);
  }
}

async function getCarrier(req, res, next) {
  try {
    const { id } = req.params;
    const carrier = await CarrierService.getCarrierById(id);
    res.json({ carrier });
  } catch (err) {
    next(err);
  }
}

async function updateCarrier(req, res, next) {
  try {
    const { id } = req.params;
    const carrierData = req.body;
    const carrier = await CarrierService.updateCarrierById(id, carrierData);
    res.json({ carrier });
  } catch (err) {
    next(err);
  }
}

async function deleteCarrier(req, res, next) {
  try {
    const { id } = req.params;
    await CarrierService.deleteCarrierById(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createCarrier,
  getCarrier,
  updateCarrier,
  deleteCarrier,
};
