const express = require('express');
const router = express.Router();
const priceController = require('../controllers/price');

// GET all prices
router.get('/', priceController.getAllPrices);

// GET a price by id
router.get('/:id', priceController.getPriceById);

// POST a new price
router.post('/', priceController.createPrice);

// PUT update a price by id
router.put('/:id', priceController.updatePriceById);

// DELETE a price by id
router.delete('/:id', priceController.deletePriceById);

module.exports = router;
