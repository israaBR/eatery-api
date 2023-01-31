const mongoose = require("mongoose");

const cartsSchema = mongoose.Schema({
  item: { type: mongoose.Types.ObjectId },
  quantity: { type: Number },
  address: { type: String },
  deliveryTime: { type: String },
  tip: { type: Number },
  subtotal: { type: Number },
});

const cartsModel = mongoose.model("carts", cartsSchema);

module.exports = cartsModel;
