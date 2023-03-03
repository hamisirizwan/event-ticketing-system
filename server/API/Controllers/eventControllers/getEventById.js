const prisma = require("../../DB/prisma");

const getEventById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const existingEvent = await prisma.events.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingEvent) {
      return res.status(400).json("event not found or was removed");
    }

    res.status(200).json(existingEvent);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getEventById;
