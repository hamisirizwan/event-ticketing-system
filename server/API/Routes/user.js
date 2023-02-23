const express = require("express");
const router = express.Router();

const {
  Register,
  Login,
  UpdateUser,
  deleteUser,
  getAllUsers,
} = require("../Controllers/userControllers");

router.post("/add", Register);
router.post("/login", Login);
router.get("/get-all", getAllUsers);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
