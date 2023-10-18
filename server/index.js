const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;
const USER = require("./API/Routes/user");
const EVENT = require("./API/Routes/event");
const TICKET = require("./API/Routes/ticket");
const CUSTOMER = require("./API/Routes/customer");
const prisma = require("./API/DB/prisma");
// const Mpesa = require("./API/Utilities/payments/mpesa");

// const mpesa = new Mpesa();

//required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("tiny"));

app.get("/", async(req, res) => {
//  const users = await prisma.users.findMany();
//  res.send(users)

res.send("heath check 100%")
});

app.use("/api/user", USER);
app.use("/api/event", EVENT);
app.use("/api/ticket", TICKET);
app.use("/api/customer", CUSTOMER);

app.listen(port, () => {
  console.log(`server is up and running at port: ${port}`);
});

module.exports = app
  
