const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  state: { type: Boolean, required: true },
  category: { type: String, required: true },
});

const menuModel = mongoose.model("menu", menuSchema);

module.exports = { menuModel };
