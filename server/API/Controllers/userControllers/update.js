const prisma = require("../../DB/prisma");

const UpdateUser = (req, res) => {
  try {
    res.send("UpdateUser");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = UpdateUser;
