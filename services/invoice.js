const Invoice = require('../models/invoice');

class InvoiceService {
  static async createInvoice(invoiceData) {
    try {
      const newInvoice = new Invoice(invoiceData);
      await newInvoice.save();
      return newInvoice;
    } catch (err) {
      console.error(`Error creating new invoice: ${err}`);
      throw err;
    }
  }

  static async getAllInvoices() {
    try {
      const invoices = await Invoice.find();
      return invoices;
    } catch (err) {
      console.error(`Error getting all invoices: ${err}`);
      throw err;
    }
  }

  static async getInvoiceById(invoiceId) {
    try {
      const invoice = await Invoice.findById(invoiceId);
      return invoice;
    } catch (err) {
      console.error(`Error getting invoice by id ${invoiceId}: ${err}`);
      throw err;
    }
  }

  static async updateInvoiceById(invoiceId, invoiceData) {
    try {
      const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, invoiceData, { new: true });
      return updatedInvoice;
    } catch (err) {
      console.error(`Error updating invoice by id ${invoiceId}: ${err}`);
      throw err;
    }
  }

  static async deleteInvoiceById(invoiceId) {
    try {
      const deletedInvoice = await Invoice.findByIdAndDelete(invoiceId);
      return deletedInvoice;
    } catch (err) {
      console.error(`Error deleting invoice by id ${invoiceId}: ${err}`);
      throw err;
    }
  }
}

module.exports = InvoiceService;
