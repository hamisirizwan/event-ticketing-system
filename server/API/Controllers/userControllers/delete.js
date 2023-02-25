const prisma = require("../../DB/prisma");

const deleteUser = async (req, res) => {
  const user_id = parseInt(req.params.id);
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      return res.status(400).json("user not found");
    }

    //delete the user
    await prisma.users.delete({
      where: {
        id: user_id,
      },
    });

    res.status(200).json("user deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = deleteUser;
