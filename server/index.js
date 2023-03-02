const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const USER = require("./API/Routes/user");
const EVENT = require("./API/Routes/event");

//required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("daraja docs page");
});

app.use("/api/user", USER);
app.use("/api/event", EVENT);

app.listen(port, () => {
  console.log(`server is up and running at port: ${port}`);
});
