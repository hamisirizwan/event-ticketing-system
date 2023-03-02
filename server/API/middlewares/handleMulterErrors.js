const multer = require("multer");

const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json(err.message);
  } else if (err) {
    return res.status(400).json(err.message);
  }
  next(err);
};

module.exports = multerErrorHandler;
