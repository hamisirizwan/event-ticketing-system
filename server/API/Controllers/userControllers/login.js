const prisma = require("../../DB/prisma");

const Login = (req, res) => {
  try {
    res.send("Login");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = Login;
