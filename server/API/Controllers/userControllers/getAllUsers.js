const prisma = require("../../DB/prisma");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany();

    allUsers.forEach((user) => {
      user.password = "#########";
    });
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getAllUsers;
