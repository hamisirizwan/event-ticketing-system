const prisma = require("../../DB/prisma");

const deleteUser = (req, res) => {
  try {
    res.send("deleteUser");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = deleteUser;
