const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');

// Routes for handling payment requests
router.post('/payments', paymentController.createPayment);
router.get('/payments/:id', paymentController.getPaymentById);
router.put('/payments/:id', paymentController.updatePaymentById);
router.delete('/payments/:id', paymentController.deletePaymentById);

module.exports = router;
