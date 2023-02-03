//TODO import libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//TODO import routes
const MenuRouter = require("./routes/menu");
const CustomersRouter = require("./routes/customers");
const AdminsRouter = require("./routes/admins");
const CartsRouter = require("./routes/carts");

//TODO declare app & DB
const APP = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/eatery";

//TODO start app & DB
APP.listen(PORT, (error) => {
  if (error) console.log(error);
  else return console.log(`Server started on port ${PORT}`);
});
mongoose.connect(MONGO_URL, (error) => {
  if (error) console.log(error);
  else return console.log(`Database is connected at ${MONGO_URL}`);
});

//TODO enable cors
var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};
APP.use(cors(corsOptions));

//TODO use routers
APP.use(express.json());
APP.use("/menu", MenuRouter);
APP.use("/customer", CustomersRouter);
APP.use("/admin", AdminsRouter);
APP.use("/cart", CartsRouter);
