const express = require("express");
const router = express.Router();

const multerErrorHandler = require("../middlewares/handleMulterErrors");
const upload = require("../Utilities/fileupload");

//handlers
const {
  addEvent,
  getAllEvents,
  getEventById,
} = require("../Controllers/eventControllers");

//routes
router.post("/add", upload.single("image"), multerErrorHandler, addEvent);
router.get("/get-all", getAllEvents);
router.get("/single/:id", getEventById);

module.exports = router;
