const prisma = require("../../DB/prisma");
const validator = require("../../Utilities/validator");

const getCustomerTickets = async (req, res) => {
  const { phone, pin } = req.body;
  try {
    if (!phone) {
      res.status(400).json("missing required parameter");
    }
    if (!validator.phone(phone)) {
      res.status(400).json("invalid phone");
    }
    const userTickets = await prisma.tickets.findMany({
      where: {
        phone: phone,
      },
      include: {
        events: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    res.status(200).json(userTickets);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = getCustomerTickets;
