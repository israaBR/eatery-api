const AdminsModel = require("../models/admins");

async function getAllAdmins() {
  try {
    return await AdminsModel.find({});
  } catch (error) {
    return error;
  }
}
async function getAdminById(adminId) {
  try {
    return await AdminsModel.findById(adminId);
  } catch (error) {
    return error;
  }
}
async function createAdmin(admin) {
  try {
    return await AdminsModel.create(admin);
  } catch (error) {
    return error;
  }
}
async function loginAdmin(admin) {
  try {
    return await AdminsModel.findOne({
      email: admin.email,
      password: admin.password,
    });
  } catch (error) {
    return error;
  }
}
async function editAdmin(adminId, newAdmin) {
  try {
    return await AdminsModel.findByIdAndUpdate(adminId, newAdmin, {
      new: true,
    });
  } catch (error) {
    return error;
  }
}
async function deleteAdmin(adminId) {
  try {
    return await AdminsModel.findByIdAndDelete(adminId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  loginAdmin,
  editAdmin,
  deleteAdmin,
};
