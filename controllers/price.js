const PriceService = require('../services/price');

exports.create = async (req, res, next) => {
  try {
    const { from, to, weight } = req.body;
    const price = await PriceService.calculate(from, to, weight);
    res.status(201).json(price);
  } catch (err) {
    next(err);
  }
};
