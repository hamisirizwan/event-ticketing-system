const prisma = require("../../DB/prisma");

const getAllCustomers = async (req, res) => {
  try {
    const AllCustomers = await prisma.customers.findMany();

    AllCustomers.forEach((user) => {
      user.pin = "#########";
    });
    res.status(200).json(AllCustomers);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getAllCustomers;
