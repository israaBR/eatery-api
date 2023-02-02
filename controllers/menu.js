const menuModel = require("../models/menu");

async function getAllItems() {
  try {
    return await menuModel.find({});
  } catch (error) {
    return error;
  }
}
async function getItemById(itemId) {
  try {
    return await menuModel.findById(itemId);
  } catch (error) {
    return error;
  }
}
async function getItemsByCategory(category) {
  try {
    return await menuModel.find({ category });
  } catch (error) {
    return error;
  }
}
async function createItem(item) {
  try {
    return await menuModel.create(item);
  } catch (error) {
    return error;
  }
}
async function editItem(itemId, newItem) {
  try {
    return await menuModel.findByIdAndUpdate(itemId, newItem, { new: true });
  } catch (error) {
    return error;
  }
}
async function deleteItem(itemId) {
  try {
    return await menuModel.findByIdAndDelete(itemId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllItems,
  getItemById,
  getItemsByCategory,
  createItem,
  editItem,
  deleteItem,
};
