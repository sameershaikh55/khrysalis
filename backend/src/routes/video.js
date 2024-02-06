const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  createVideo,
  allVideos,
  videoDetail,
  deleteVideo,
  updateVideo,
  uploadThumbnailFile,
  uploadVideoFile,
  likeVideo,
} = require("../controller/video");

// ROUTES
router.route("/").post(authentication, createVideo);

router.route("/channel-videos/:id").get(authentication, allVideos);

router
  .route("/single-video/:id")
  .get(authentication, videoDetail)
  .put(authentication, updateVideo)
  .delete(authentication, deleteVideo);

router
  .route("/video-file/:id")
  .patch(authentication, upload.single("video"), uploadVideoFile);

router
  .route("/thumbnail/:id")
  .patch(authentication, upload.single("thumbnail"), uploadThumbnailFile);

router.route("/like/:id").get(authentication, likeVideo);

module.exports = router;