const {
  getAllAdmins,
  getAdminById,
  createAdmin,
  loginAdmin,
  editAdmin,
  deleteAdmin,
} = require("../controllers/admins");

const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await getAllAdmins());
});
router.get("/:id", async (request, response) => {
  return response.json(await getAdminById(request.params.id));
});
router.post("/", async (request, response) => {
  return response.json(await createAdmin(request.body));
});
router.post("/login", async (request, response) => {
  return response.json(await loginAdmin(request.body));
});
router.put("/:id", async (request, response) => {
  return response.json(await editAdmin(request.params.id, request.body));
});
router.delete("/:id", async (request, response) => {
  return response.json(await deleteAdmin(request.params.id));
});

module.exports = router;
