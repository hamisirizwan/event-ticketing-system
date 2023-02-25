const prisma = require("../../DB/prisma");
const bcrypt = require("bcryptjs");

const changePassword = async (req, res) => {
  const { oldpass, newpass } = req.body;
  const user_id = 2; //will later be dynamic after jwt
  try {
    if (!oldpass || !newpass) {
      return res.status(400).json("missing required parameters");
    }
    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      return res.status(400).json("user not found or deleted");
    }

    //validate old pass
    const validPassword = await bcrypt.compare(oldpass, user.password);
    if (!validPassword) {
      return res.status(400).json("old password invalid");
    }

    //hash new pass
    const newhashedPass = await bcrypt.hash(newpass, 10);
    //update user password
    const updatedUser = await prisma.users.update({
      where: {
        id: user_id,
      },
      data: {
        password: newhashedPass,
      },
    });
    res.status(200).json("password changed successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = changePassword;
