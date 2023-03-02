const prisma = require("../../DB/prisma");
const bucket = require("../../DB/bucket");
const fs = require("fs");

const addEvent = async (req, res) => {
  const {} = req.body;
  const image = req.file;
  try {
    if (!image) {
      return res.status(400).json("provide event poster");
    }

    //image from filesystem
    const imageFile = fs.readFileSync(image.path);

    //upload to supabase bucket
    const uploaded = await bucket
      .from("images")
      .upload(`${image.path}`, imageFile, {
        contentType: image.path.mimetype,
      });

    if (!uploaded.data) {
      fs.unlinkSync(req.file.path);
      throw {
        custom: true,
        message: uploaded.error.message,
      };
    }

    //remove file from filesystem
    fs.unlinkSync(req.file.path);

    //save to prisma
    const image_path = `${process.env.SUPA_URL}/object/public/images/${uploaded.data.path}`;

    res.json(image_path);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = addEvent;
