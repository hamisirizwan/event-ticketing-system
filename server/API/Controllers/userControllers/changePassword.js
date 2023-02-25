const prisma = require("../../DB/prisma");
const bcrypt = require("bcryptjs");

const changePassword = async (req, res) => {
  const { oldpass, newpass } = req.body;
  const user_id = 1; //will later be dynamic after jwt
  try {
    if (!oldpass || !newpass) {
      res.status(400).json("missing required parameters");
    }
    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    //validate old pass
    const validPassword = await bcrypt.compare(oldpass, user.password);
    if (!validPassword) {
      res.status(400).json("old password invalid");
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

    res.status(200).json("user added successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = changePassword;
