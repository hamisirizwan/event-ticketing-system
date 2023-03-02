const express = require("express");
const router = express.Router();
const { addEvent } = require("../Controllers/eventControllers");
const multerErrorHandler = require("../middlewares/handleMulterErrors");
const upload = require("../Utilities/fileupload");

router.post("/add", upload.single("image"), multerErrorHandler, addEvent);

module.exports = router;
