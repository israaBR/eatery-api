const mongoose = require("mongoose");

const cartsSchema = mongoose.Schema({
  items: {
    type: [
      {
        item: { type: mongoose.Types.ObjectId, ref: "menu" },
        quantity: { type: Number },
      },
    ],
  },
  address: { type: String },
  deliveryTime: { type: String },
  tip: { type: Number },
  subtotal: { type: Number },
});

const cartsModel = mongoose.model("carts", cartsSchema);

module.exports = cartsModel;
