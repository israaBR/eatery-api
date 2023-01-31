const MenuModel = require("../models/menu");

async function getAllItems() {
  try {
    return await MenuModel.find({});
  } catch (error) {
    console.log(error);
  }
}
async function getItemById(itemId) {
  try {
    return await MenuModel.findById(itemId);
  } catch (error) {
    console.log(error);
  }
}
async function getItemsByCategory(category) {
  try {
    return await MenuModel.find({ category });
  } catch (error) {
    console.log(error);
  }
}
async function createItem(item) {
  try {
    return await MenuModel.create(item);
  } catch (error) {
    console.log(error);
  }
}
async function editItem(itemId, newItem) {
  try {
    return await MenuModel.findByIdAndUpdate(itemId, newItem, { new: true });
  } catch (error) {
    console.log(error);
  }
}
async function deleteItem(itemId) {
  try {
    return await MenuModel.findByIdAndDelete(itemId);
  } catch (error) {
    console.log(error);
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
