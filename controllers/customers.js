const CustomersModel = require("../models/customers");

async function getAllCustomers() {
  try {
    return await CustomersModel.find({});
  } catch (error) {
    return error;
  }
}
async function getCustomerById(customerId) {
  try {
    return await CustomersModel.findById(customerId);
  } catch (error) {
    return error;
  }
}
async function createCustomer(customer, cart) {
  try {
    return await CustomersModel.create({ ...customer, cart });
  } catch (error) {
    return error;
  }
}
async function loginCustomer(customer) {
  try {
    return await CustomersModel.findOne({
      email: customer.email,
      password: customer.password,
    });
  } catch (error) {
    return error;
  }
}
async function editCustomer(customerId, newCustomer) {
  try {
    return await CustomersModel.findByIdAndUpdate(customerId, newCustomer, {
      new: true,
    });
  } catch (error) {
    return error;
  }
}
async function deleteCustomer(customerId) {
  try {
    return await CustomersModel.findByIdAndDelete(customerId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  loginCustomer,
  editCustomer,
  deleteCustomer,
};
