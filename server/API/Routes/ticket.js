const express = require("express");

const router = express.Router();

const {
  bookTicket,
  payTicket,
  getAllTickets,
} = require("../Controllers/ticketControllers");
const {
  stkQuery,
  handleCallback,
} = require("../Controllers/mpesaController/mpesaHandlers");

callbackPath = process.env.CALLBACKPATH;

router.get("/get-all", getAllTickets);
router.post("/book", bookTicket);
router.post("/pay/:id", payTicket);
router.post("/query", stkQuery);
router.post(`/${callbackPath}`, handleCallback);

module.exports = router;
