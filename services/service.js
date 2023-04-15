const Service = require('../models/service');

const createService = async (serviceData) => {
  try {
    const newService = new Service(serviceData);
    await newService.save();
    return newService;
  } catch (error) {
    throw new Error(`Could not create service: ${error.message}`);
  }
};

const getAllServices = async () => {
  try {
    const services = await Service.find({});
    return services;
  } catch (error) {
    throw new Error(`Could not get all services: ${error.message}`);
  }
};

const getServiceById = async (id) => {
  try {
    const service = await Service.findById(id);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  } catch (error) {
    throw new Error(`Could not get service by id: ${error.message}`);
  }
};

const updateService = async (id, serviceData) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(id, serviceData, { new: true });
    if (!updatedService) {
      throw new Error('Service not found');
    }
    return updatedService;
  } catch (error) {
    throw new Error(`Could not update service: ${error.message}`);
  }
};

const deleteService = async (id) => {
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  } catch (error) {
    throw new Error(`Could not delete service: ${error.message}`);
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
