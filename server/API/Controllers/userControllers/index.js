const changePassword = require("./changePassword");
const deleteUser = require("./delete");
const getAllUsers = require("./getAllUsers");
const Login = require("./login");
const addUser = require("./register");
const UpdateUser = require("./update");

module.exports = {
  addUser,
  Login,
  getAllUsers,
  UpdateUser,
  deleteUser,
  changePassword,
};
