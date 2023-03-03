const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const USER = require("./API/Routes/user");
const EVENT = require("./API/Routes/event");
const TICKET = require("./API/Routes/ticket");
// const Mpesa = require("./API/Utilities/payments/mpesa");

// const mpesa = new Mpesa();

//required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("daraja docs page");
});

app.use("/api/user", USER);
app.use("/api/event", EVENT);
app.use("/api/ticket", TICKET);

app.listen(port, () => {
  console.log(`server is up and running at port: ${port}`);
});
