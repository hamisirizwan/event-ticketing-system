const prisma = require("../../DB/prisma");
const validator = require("../../Utilities/validator");

const UpdateUser = async (req, res) => {
  const user_id = parseInt(req.params.id);

  const data = req.body;
  try {
    //check for no data
    if (Object.keys(data).length === 0) {
      throw {
        custom: true,
        message: "no data to update",
      };
    }

    //if email provided
    if (data.email) {
      if (!validator.email(data.email)) {
        res.status(200).json("invalid email");
      }
    }

    //if phone provided
    if (data.phone) {
      if (!validator.phone(data.phone)) {
        res.status(200).json("invalid phone number");
      }
    }

    //find user
    const existingUser = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });
    if (!existingUser) {
      res.status(400).json("user not found");
    }

    const updatedUser = await prisma.users.update({
      where: {
        id: user_id,
      },
      data: {
        name: data.name || existingUser.name,
        email: data.email || existingUser.email,
        phone: data.phone || existingUser.phone,
      },
    });
    res.status(200).json({
      message: "Details updated successfully.",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = UpdateUser;
