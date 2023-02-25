const prisma = require("../../DB/prisma");
const generator = require("../../Utilities/generators");
const validator = require("../../Utilities/validator");
const bcrypt = require("bcryptjs");

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json("missing required params");
    }
    if (!validator.email(email)) {
      return res.status(400).json("invalid email address");
    }

    //find user
    const existingUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return res.status(400).json(`user with email: ${email} not found`);
    }

    //validate password
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json("wrong password");
    }
    //generate
    const token = generator.jwtToken(existingUser);
    // console.log(token);
    existingUser.password = "#############";

    res
      .status(200)
      .json({ message: "log in successfull", user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = Login;
