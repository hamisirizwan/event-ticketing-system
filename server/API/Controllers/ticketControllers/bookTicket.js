const prisma = require("../../DB/prisma");
const validator = require("../../Utilities/validator");
const bookTicket = async (req, res) => {
  const { phone, name, event_id } = req.body;
  try {
    if (!phone || !name || !event_id) {
      return res.status(400).json("required fields missing");
    }
    if (!validator.phone(phone)) {
      return res.status(400).json("invalid phone number");
    }

    // const formatedPhone = `254${phone.substring(1)}`;

    //find event
    const existingEvent = await prisma.events.findUnique({
      where: {
        id: parseInt(event_id),
      },
    });

    if (!existingEvent) {
      return res.status(400).json("event not found or was removed");
    }

    const amount = Number(existingEvent.price);

    const newTicket = await prisma.tickets.create({
      data: {
        event_id: parseInt(event_id),
        phone: phone,
        paid_by: name,
      },
    });
    res.status(200).json(newTicket);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = bookTicket;
