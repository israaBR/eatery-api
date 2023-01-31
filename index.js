//TODO import libraries
const express = require("express");
const mongoose = require("mongoose");

//TODO import routes

//TODO declare app & DB
const APP = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/eatery";

//TODO start app & DB
APP.listen(PORT, (error) => {
  if (error) console.log(error);
  else return console.log(`Server started on port ${PORT}`);
});
mongoose.connect(MONGO_URL, (error) => {
  if (error) console.log(error);
  else return console.log("Database is connected");
});

//TODO use routers
APP.use(express.json());
// APP.use("/menu", MenuRouter);
// APP.use("/customer", CustomersRouter);
