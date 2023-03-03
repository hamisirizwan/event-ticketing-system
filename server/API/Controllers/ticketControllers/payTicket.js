const prisma = require("../../DB/prisma");
const Mpesa = require("../../Utilities/payments/mpesa");

const mpesa = new Mpesa();

const payTicket = async (req, res) => {
  const ticket_id = parseInt(req.params.id);
  try {
    const existingTicket = await prisma.tickets.findUnique({
      where: {
        ticket_no: ticket_id,
      },
      include: {
        events: true,
      },
    });

    if (!existingTicket) {
      return res.status(400).json("ticket not available. Book one!!");
    }

    if (existingTicket.is_paid) {
      return res.status(400).json("ticket already paid for. Book another!!");
    }

    const formatedPhone = `254${existingTicket.phone.substring(1)}`;
    const amount = existingTicket.events.price;

    const resp = await mpesa.stkPush(formatedPhone, amount, ticket_id);

    //create a payment
    const newPayment = await prisma.payments.create({
      data: {
        ticket_no: ticket_id,
        reference: resp.CheckoutRequestID,
      },
    });

    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = payTicket;
