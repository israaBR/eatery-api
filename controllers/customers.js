const CustomersModel = require("../models/customers");

async function getAllCustomers() {
  try {
    return await CustomersModel.find({});
  } catch (error) {
    console.log(error);
  }
}
async function getCustomerById(customerId) {
  try {
    return await CustomersModel.findById(customerId);
  } catch (error) {
    console.log(error);
  }
}
async function createCustomer(customer) {
  try {
    return await CustomersModel.create(customer);
  } catch (error) {
    console.log(error);
  }
}
async function editCustomer(customerId, newCustomer) {
  try {
    return await CustomersModel.findByIdAndUpdate(customerId, newCustomer, {
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
}
async function deleteCustomer(customerId) {
  try {
    return await CustomersModel.findByIdAndDelete(customerId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
