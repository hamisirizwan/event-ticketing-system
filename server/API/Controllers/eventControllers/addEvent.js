const prisma = require("../../DB/prisma");
const bucket = require("../../DB/bucket");
const fs = require("fs");

const addEvent = async (req, res) => {
  const { title, description, price, event_date } = req.body;
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
      return res.status(400).json(uploaded.error.message);
    }

    //remove file from filesystem
    fs.unlinkSync(req.file.path);

    //save to prisma
    const image_path = `${process.env.SUPA_URL}/object/public/images/${uploaded.data.path}`;

    //handle body
    if (!title || !description || !price || !event_date) {
      return res.status(400).json("missing required body parameters");
    }

    if (parseInt(price) < 1) {
      return res.status(400).json("invalid price ranges");
    }

    const data = {
      title,
      description,
      image_url: image_path,
      price: parseInt(price),
      event_date: new Date(event_date),
    };

    const newEvent = await prisma.events.create({
      data,
    });

    res.json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = addEvent;
