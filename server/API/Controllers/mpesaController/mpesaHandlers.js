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

const handleCallback = (req, res) => {
  console.log(req.params.ticket);
  console.log(req.body);
};
module.exports = {
  stkQuery,
  handleCallback,
};
