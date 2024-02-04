const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middleware/upload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  createChannel,
  allChannels,
  channelDetail,
  deleteChannel,
} = require("../controller/channel");

// ROUTES
router.route("/").get(authentication, allChannels);
router
  .route("/:id")
  .get(authentication, channelDetail)
  .delete(authentication, deleteChannel);
router.route("/add").post(
  authentication,
  uploadMiddleware.single("channelImage"),
  // upload("images/channelImage", "channelImage"),
  createChannel
);
// .post(authentication, createChannel);

// router.route("/login").post(login);
// router.route("/logout").get(logout);
// router.route("/users").get(authentication, allUsers);
// router
//   .route("/user/:id")
//   .patch(authentication, updateUser)
//   .delete(authentication, deleteUser);
// router
//   .route("/password/forgot")
//   .post(
//     body("email").isEmail().withMessage("Please enter a valid email address"),
//     forgotPassword
//   );
// router.route("/password/reset/:token").patch(resetPassword);

module.exports = router;
