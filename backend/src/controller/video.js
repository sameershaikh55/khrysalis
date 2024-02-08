const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VideoModel = require("../models/video");
const ChannelModel = require("../models/channel");
const UserModel = require("../models/registration");
const sendResponse = require("../utils/sendResponse");

// register Channel
exports.createVideo = catchAsyncErrors(async (req, res, next) => {
  const videoData = await VideoModel.create(req.body);

  await ChannelModel.findByIdAndUpdate(
    req.body.channel,
    { $push: { videos: videoData._id } },
    { new: true }
  );

  sendResponse(true, 201, "video", videoData, res);
});

// login video
exports.allVideos = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const videos = await VideoModel.find({ channel: id });
  sendResponse(true, 200, "video", videos, res);
});

// logout video
exports.videoDetail = catchAsyncErrors(async (req, res, next) => {
  const videoDetail = await VideoModel.findById(req.params.id);
  sendResponse(true, 200, "videoDetail", videoDetail, res);
});

// DELETE video
exports.deleteVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedvideo = await VideoModel.findByIdAndDelete(id);
  sendResponse(true, 200, "video", deletedvideo, res);
});

// Update video
exports.updateVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.uploadVideoFile = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  let bdy = req.body;
  bdy.video = bdy.upload;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.uploadThumbnailFile = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  let bdy = req.body;
  bdy.thumbnail = bdy.upload;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.likeVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const userID = res.user._id;

  // Check if the user has already liked the video
  const video = await VideoModel.findById(id);

  if (!video) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  const isLiked = video.like.includes(userID);

  let updatedVideo;

  if (isLiked) {
    // If already liked, remove the like
    updatedVideo = await VideoModel.findByIdAndUpdate(
      id,
      { $pull: { like: userID } },
      { new: true }
    );

    await UserModel.findByIdAndUpdate(
      userID,
      { $pull: { likedVideos: id } },
      { new: true }
    );
  } else {
    // If not liked, add the like
    updatedVideo = await VideoModel.findByIdAndUpdate(
      id,
      { $push: { like: userID } },
      { new: true }
    );

    // If not liked, add the like
    await UserModel.findByIdAndUpdate(
      userID,
      { $push: { likedVideos: id } },
      { new: true }
    );
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});
