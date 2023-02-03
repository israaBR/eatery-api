const mongoose = require("mongoose");

const adminsSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const adminsModel = mongoose.model("admins", adminsSchema);

module.exports = adminsModel;
