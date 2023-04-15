const { InvoiceService } = require('../services');

async function createInvoice(req, res, next) {
  try {
    const invoiceData = req.body;
    const invoice = await InvoiceService.createInvoice(invoiceData);
    res.status(201).json({ invoice });
  } catch (err) {
    next(err);
  }
}

async function getInvoice(req, res, next) {
  try {
    const { id } = req.params;
    const invoice = await InvoiceService.getInvoiceById(id);
    res.json({ invoice });
  } catch (err) {
    next(err);
  }
}

async function updateInvoice(req, res, next) {
  try {
    const { id } = req.params;
    const invoiceData = req.body;
    const invoice = await InvoiceService.updateInvoiceById(id, invoiceData);
    res.json({ invoice });
  } catch (err) {
    next(err);
  }
}

async function deleteInvoice(req, res, next) {
  try {
    const { id } = req.params;
    await InvoiceService.deleteInvoiceById(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
};
