const mongoose = require("mongoose");

const customersSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  cart: { type: mongoose.Types.ObjectId, ref: "carts", required: true },
});

const customersModel = mongoose.model("customers", customersSchema);

module.exports = customersModel;
