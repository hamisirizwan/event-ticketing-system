const express = require("express");

const router = express.Router();

const {
  getAllCustomers,
  getCustomerTickets,
} = require("../Controllers/customerControllers");

router.get("/get-all", getAllCustomers);
router.post("/get-user-tickets", getCustomerTickets);

module.exports = router;
