const prisma = require("../../DB/prisma");
const generator = require("../../Utilities/generators");
const validator = require("../../Utilities/validator");
const bcrypt = require("bcryptjs");

const AddUser = async (req, res) => {
  const { email, name, is_admin, phone } = req.body;
  try {
    if (!email || !name || !phone) {
      return res.status(400).json("missing required fields");
    }
    if (!validator.email(email)) {
      return res.status(400).json("invalid email address");
    }
    if (!validator.phone(phone)) {
      return res.status(400).json("invalid phone number");
    }

    const existingUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json("user already exists");
    }

    const password = generator.password();
    console.log(password);
    const hashedPass = await bcrypt.hash(password, 10);
    const addedUser = await prisma.users.create({
      data: {
        name: name,
        email: email,
        is_admin: is_admin || false,
        phone: phone,
        password: hashedPass,
      },
    });
    res.status(200).json({
      message: "User added successfully and invite sent",
      data: addedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = AddUser;
