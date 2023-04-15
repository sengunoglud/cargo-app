const User = require('../models/user');

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const updateUserById = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

const deleteUserById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
