const {
  getAllCarts,
  getCartById,
  createCart,
  editCart,
  deleteCart,
} = require("../controllers/carts");

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await getAllCarts());
});
router.get("/:id", async (request, response) => {
  return response.json(await getCartById(request.params.id));
});
router.post("/", async (request, response) => {
  return response.json(await createCart(request.body));
});
router.put("/:id", async (request, response) => {
  return response.json(await editCart(request.params.id, request.body));
});
router.delete("/:id", async (request, response) => {
  return response.json(await deleteCart(request.params.id));
});

module.exports = router;
