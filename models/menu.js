const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: String, required: true },
  category: { type: String, required: true },
});

const menuModel = mongoose.model("menus", menuSchema);

module.exports = menuModel;
