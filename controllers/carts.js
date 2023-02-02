const CartsModel = require("../models/carts");

async function getAllCarts() {
  try {
    return await CartsModel.find({});
  } catch (error) {
    return error;
  }
}
async function getCartById(cartId) {
  try {
    return await CartsModel.findById(cartId);
  } catch (error) {
    return error;
  }
}
async function createCart(cart) {
  try {
    return await CartsModel.create(cart);
  } catch (error) {
    return error;
  }
}
async function editCart(cartId, newCart) {
  try {
    return await CartsModel.findByIdAndUpdate(cartId, newCart, { new: true });
  } catch (error) {
    return error;
  }
}
async function deleteCart(cartId) {
  try {
    return await CartsModel.findByIdAndDelete(cartId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  editCart,
  deleteCart,
};
