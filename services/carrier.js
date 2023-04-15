const Carrier = require('../models/carrier');

const getAllCarriers = async () => {
  try {
    const carriers = await Carrier.find();
    return carriers;
  } catch (error) {
    throw new Error(error);
  }
};

const createCarrier = async (carrierData) => {
  try {
    const carrier = new Carrier(carrierData);
    await carrier.save();
    return carrier;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllCarriers,
  createCarrier,
};
