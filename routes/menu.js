const {
  getAllItems,
  getItemById,
  getItemsByCategory,
  createItem,
  editItem,
  deleteItem,
} = require("../controllers/menu");

const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await getAllItems());
});
router.get("/:id", async (request, response) => {
  return response.json(await getItemById(request.params.id));
});
router.get("/category/:category", async (request, response) => {
  return response.json(await getItemsByCategory(request.params.category));
});
router.post("/", async (request, response) => {
  return response.json(await createItem(request.body));
});
router.put("/:id", async (request, response) => {
  return response.json(await editItem(request.params.id));
});
router.delete("/:id", async (request, response) => {
  return response.json(await deleteItem(request.params.id));
});

module.exports = router;
