const deleteUser = require("./delete");
const getAllUsers = require("./getAllUsers");
const Login = require("./login");
const Register = require("./register");
const UpdateUser = require("./update");

module.exports = {
  Register,
  Login,
  getAllUsers,
  UpdateUser,
  deleteUser,
};
