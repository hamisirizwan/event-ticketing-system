const prisma = require("../../DB/prisma");

const getAllUsers = (req, res) => {
  try {
    res.send("getAllUsers");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getAllUsers;
