const prisma = require("../../DB/prisma");

const getAllTickets = async (req, res) => {
  try {
    const allTickets = await prisma.tickets.findMany({
      include: {
        events: true,
      },
    });

    res.status(200).json(allTickets);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getAllTickets;
