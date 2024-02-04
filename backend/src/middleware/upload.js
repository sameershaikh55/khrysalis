const multer = require("multer");
const ErrorHandler = require("../utils/errorhandler");
const { ObjectId } = require("mongodb");
const path = require("path");

const upload = (destination, paramName, generateFilename) => {
  return multer({
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
        cb(null, path.resolve(__dirname, "../../", destination));
      },
      filename: (req, file, cb) => {
        const filename = generateFilename(req, file);
        req.body[paramName] = filename;
        cb(null, filename);
      },
      onerror: (err, next) => {
        console.log(err);
        next();
      },
    }),
  });
};

const generateChannelImageFilename = (req, file) => {
  if (req.params.id) {
    return req.params.id + `.${file.mimetype.split("/").pop()}`;
  } else {
    req.body._id = new ObjectId();
    return req.body._id.toString() + `.${file.mimetype.split("/").pop()}`;
  }
};

const uploadMiddleware = upload(
  "public/images/channelImage",
  "channelImage",
  generateChannelImageFilename
);

module.exports = uploadMiddleware;

// const multer = require("multer");
// const ErrorHandler = require("../utils/errorhandler");
// const { ObjectId } = require("mongodb");
// const path = require("path");

// const upload = (destination, paramName) => {
//   return multer({
//     limits: {
//       fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/)) {
//         return cb(new ErrorHandler("Please upload a valid image file", 422));
//       }
//       cb(undefined, true);
//     },
//     storage: multer.diskStorage({
//       destination: (req, file, cb) => {
//         cb(null, path.resolve(__dirname, "../../" + `public/${destination}`));
//       },
//       filename: (req, file, cb) => {
//         const filename = generateFilename(req, file);
//         req.body[paramName] = filename;
//         cb(null, filename);
//       },
//       onerror: (err, next) => {
//         console.log(err);
//         next();
//       },
//     }),
//   });
// };

// const generateFilename = (req, file) => {
//   if (req.params.id) {
//     return req.params.id + `.${file.mimetype.split("/").pop()}`;
//   } else {
//     req.body._id = new ObjectId();
//     return req.body._id.toString() + `.${file.mimetype.split("/").pop()}`;
//   }
// };

// module.exports = upload;
