const express = require("express");
const router = express.Router();

const {
  addUser,
  Login,
  UpdateUser,
  deleteUser,
  getAllUsers,
  changePassword,
} = require("../Controllers/userControllers");

router.post("/add", addUser);
router.post("/login", Login);
router.get("/get-all", getAllUsers);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", deleteUser);
router.put("/change-pass", changePassword);

module.exports = router;
