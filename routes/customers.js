const {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  loginCustomer,
  editCustomer,
  deleteCustomer,
} = require("../controllers/customers");

const { createCart } = require("../controllers/carts");

const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await getAllCustomers());
});
router.get("/:id", async (request, response) => {
  return response.json(await getCustomerById(request.params.id));
});
router.post("/", async (request, response) => {
  let cart = await createCart({});
  return response.json(await createCustomer(request.body, cart._id));
});
router.post("/login", async (request, response) => {
  return response.json(await loginCustomer(request.body));
});
router.put("/:id", async (request, response) => {
  return response.json(await editCustomer(request.params.id, request.body));
});
router.delete("/:id", async (request, response) => {
  return response.json(await deleteCustomer(request.params.id));
});

module.exports = router;
