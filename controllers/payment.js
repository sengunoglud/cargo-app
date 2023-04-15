const { PaymentService } = require('../services');

async function createPayment(req, res, next) {
  try {
    const paymentData = req.body;
    const payment = await PaymentService.createPayment(paymentData);
    res.status(201).json({ payment });
  } catch (err) {
    next(err);
  }
}

async function getPayment(req, res, next) {
  try {
    const { id } = req.params;
    const payment = await PaymentService.getPaymentById(id);
    res.json({ payment });
  } catch (err) {
    next(err);
  }
}

async function updatePayment(req, res, next) {
  try {
    const { id } = req.params;
    const paymentData = req.body;
    const payment = await PaymentService.updatePaymentById(id, paymentData);
    res.json({ payment });
  } catch (err) {
    next(err);
  }
}

async function deletePayment(req, res, next) {
  try {
    const { id } = req.params;
    await PaymentService.deletePaymentById(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
};
