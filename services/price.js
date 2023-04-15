const Price = require('../models/price');

class PriceService {
  static async create(priceData) {
    try {
      const price = await Price.create(priceData);
      return price;
    } catch (err) {
      throw err;
    }
  }

  static async getById(id) {
    try {
      const price = await Price.findById(id);
      if (!price) {
        throw new Error(`Price not found for id: ${id}`);
      }
      return price;
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    try {
      const prices = await Price.find();
      return prices;
    } catch (err) {
      throw err;
    }
  }

  static async update(id, priceData) {
    try {
      const price = await Price.findById(id);
      if (!price) {
        throw new Error(`Price not found for id: ${id}`);
      }
      Object.assign(price, priceData);
      await price.save();
      return price;
    } catch (err) {
      throw err;
    }
  }

  static async delete(id) {
    try {
      const price = await Price.findById(id);
      if (!price) {
        throw new Error(`Price not found for id: ${id}`);
      }
      await price.remove();
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PriceService;
