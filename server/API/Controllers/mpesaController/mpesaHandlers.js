const prisma = require("../../DB/prisma");
const Mpesa = require("../../Utilities/payments/mpesa");

const mpesa = new Mpesa();

const stkQuery = async (req, res) => {
  const CheckoutRequestID = req.body.CheckoutRequestID;
  try {
    if (!CheckoutRequestID) {
      return res.status(400).json("provide required parameters");
    }
    const resp = await mpesa.stkQuery(CheckoutRequestID);

    res.json(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

const handleCallback = async (req, res) => {
  console.log(req.query.ticket);
  if (!req.body.Body.stkCallback.CallbackMetadata) {
    console.log(req.body.Body.stkCallback.ResultDesc);
    res.status(200).json("ok saf");
    return;
  }

  const code = req.body.Body.stkCallback.CallbackMetadata.Item[1].Value;
  try {
    //update payment
    const existingPayment = await prisma.payments.findFirst({
      where: {
        reference: req.body.Body.stkCallback.CheckoutRequestID,
      },
    });

    if (!existingPayment) {
      return res.status(200).json("ok saf");
    }

    await prisma.payments.update({
      where: {
        id: existingPayment.id,
      },
      data: {
        reference: code,
      },
    });
    //update ticket to paid
    const existingTicket = await prisma.tickets.findUnique({
      where: {
        ticket_no: parseInt(req.query.ticket),
      },
    });

    if (!existingTicket) {
      return res.status(200).json("ok saf");
    }

    await prisma.tickets.update({
      where: {
        ticket_no: parseInt(req.query.ticket),
      },
      data: {
        is_paid: true,
      },
    });

    res.status(200).json("ok saf");
  } catch (error) {
    console.log(error.message);
    res.status(200).json("ok saf");
  }
};
module.exports = {
  stkQuery,
  handleCallback,
};
