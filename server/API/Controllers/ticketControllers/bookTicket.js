const prisma = require("../../DB/prisma");
const bcrypt = require("bcryptjs");
const validator = require("../../Utilities/validator");
const generator = require("../../Utilities/generators");
const bookTicket = async (req, res) => {
  const { phone, name, event_id } = req.body;
  try {
    if (!phone || !name || !event_id) {
      return res.status(400).json("required fields missing");
    }
    if (!validator.phone(phone)) {
      return res.status(400).json("invalid phone number");
    }
    if (!validator.name(name)) {
      return res.status(400).json("Remove non-letter characters in name field");
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
      include: {
        events: true,
      },
    });

    //find if existing customer else add a new customer.
    const existingCustomer = await prisma.customers.findUnique({
      where: {
        phone: phone,
      },
    });

    if (!existingCustomer) {
      const pin = generator.otp().toString();
      const hashedPin = await bcrypt.hash(pin, 10);
      const newCustomer = await prisma.customers.create({
        data: {
          name: name,
          phone: phone,
          pin: hashedPin,
        },
      });
      // console.log(newCustomer);
    }
    res.status(200).json(newTicket);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = bookTicket;
