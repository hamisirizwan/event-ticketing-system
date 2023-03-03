const prisma = require("../../DB/prisma");

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await prisma.events.findMany();

    res.status(200).json(allEvents);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getAllEvents;
