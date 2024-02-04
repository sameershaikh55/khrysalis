const multer = require("multer");
const ErrorHandler = require("../errorhandler");
const { ObjectId } = require("mongodb");
const path = require("path");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/)) {
      return cb(new ErrorHandler("Please upload a valid image file", 422));
    }
    cb(undefined, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(req, "req");
      console.log(file, "file");

      cb(
        null,
        path.resolve(__dirname, "../../../" + "public/images/channelImage")
      );
    },
    filename: (req, file, cb) => {
      if (req.params.id) {
        req.body.channelImage =
          req.params.id + `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.channelImage);
      } else {
        req.body._id = new ObjectId();
        req.body.channelImage =
          req.body._id.toString() + `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.channelImage);
      }
    },
    onerror: (err, next) => {
      console.log(err);
      next();
    },
  }),
});

module.exports = upload;
