const {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  editCustomer,
  deleteCustomer,
} = require("../controllers/customers");

const express = require("express");
const { Router } = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await getAllCustomers());
});
router.get("/:id", async (request, response) => {
  return response.json(await getCustomerById(request.params.id));
});
router.post("/", async (request, response) => {
  return response.json(await createCustomer(request.body));
});
router.put("/:id", async (request, response) => {
  return response.json(await editCustomer(request.params.id, request.body));
});
router.delete("/:id", async (request, response) => {
  return response.json(await deleteCustomer(request.params.id));
});

module.exports = router;