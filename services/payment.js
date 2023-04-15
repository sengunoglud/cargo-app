const Payment = require('../models/payment');

class PaymentService {
  static async createPayment(paymentData) {
    try {
      const payment = new Payment(paymentData);
      await payment.save();
      return payment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getPaymentById(paymentId) {
    try {
      const payment = await Payment.findById(paymentId);
      if (!payment) {
        throw new Error(`Payment with id ${paymentId} not found`);
      }
      return payment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePayment(paymentId, paymentData) {
    try {
      const payment = await Payment.findByIdAndUpdate(paymentId, paymentData, { new: true });
      if (!payment) {
        throw new Error(`Payment with id ${paymentId} not found`);
      }
      return payment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deletePayment(paymentId) {
    try {
      const payment = await Payment.findByIdAndDelete(paymentId);
      if (!payment) {
        throw new Error(`Payment with id ${paymentId} not found`);
      }
      return payment;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PaymentService;
