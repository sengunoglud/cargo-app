const ServiceService = require('../services/service');

exports.list = async (req, res, next) => {
  try {
    const services = await ServiceService.getAll();
    res.json(services);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const serviceData = req.body;
    const service = await ServiceService.create(serviceData);
    res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const serviceId = req.params.id;
    const service = await ServiceService.getById(serviceId);
    res.json(service);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const serviceId = req.params.id;
    const serviceData = req.body;
    const service = await ServiceService.update(serviceId, serviceData);
    res.json(service);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const serviceId = req.params.id;
    await ServiceService.delete(serviceId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
