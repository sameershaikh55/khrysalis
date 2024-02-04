const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ChannelModel = require("../models/channel");
const UserModel = require("../models/registration");
const sendResponse = require("../utils/sendResponse");
const { imageURL } = require("../utils/imageURL");

// register Channel
exports.createChannel = catchAsyncErrors(async (req, res, next) => {
  const channelData = await ChannelModel.create(req.body);

  const userId = res.user._id;
  await UserModel.findByIdAndUpdate(
    userId,
    { $push: { channel: channelData._id } },
    { new: true }
  );

  sendResponse(true, 201, "channel", channelData, res);
});

// login USER
exports.allChannels = catchAsyncErrors(async (req, res, next) => {
  const channel = await ChannelModel.find();
  sendResponse(true, 200, "channel", channel, res);
});

// logout USER
exports.channelDetail = catchAsyncErrors(async (req, res, next) => {
  const device = await RegisterDevicesModel.findById(req.params.id);
  const imageUrl = imageURL(req, "channelImage");

  sendResponse(
    true,
    200,
    "device",
    {
      pictureUrl: imageUrl,
      device,
    },
    res
  );
});

// DELETE USER
exports.deleteChannel = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await ChannelModel.findByIdAndDelete(id);
  sendResponse(true, 200, "user", deletedUser, res);
});

// Update USER
exports.updateChannel = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await ChannelModel.findById(id);

  user.email = req.body.email;

  if (req.body.password) {
    user.password = req.body.password;
  }

  await user.save({
    new: true,
    runValidators: true,
  });

  sendResponse(true, 200, "user", user, res);
});

// GET USER DATA WITH TOKEN AUTHENTICATION
exports.getUserData = catchAsyncErrors(async (req, res, next) => {
  sendResponse(true, 200, "user", res.user, res);
});

// Forget Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  const user = await ChannelModel.findOne({ email }).select(
    "+resetPasswordToken"
  );

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.PASSWORD_RESET_URL}/password/reset/${resetToken}`;

  const message = `Your password reset URL is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Password Recovery`,
      message,
    });

    sendResponse(
      true,
      200,
      "message",
      `Email sent to ${user.email} successfully`,
      res
    );
  } catch (error) {
    user.resetPasswordToken.token = undefined;
    user.resetPasswordToken.expire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (!password) {
    return next(new ErrorHandler("Invalid field", 422));
  }

  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await ChannelModel.findOne({
    "resetPasswordToken.token": resetPasswordToken,
    "resetPasswordToken.expire": { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler("Reset Password URL is invalid or has been expired", 400)
    );
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  user.password = password;
  user.resetPasswordToken.token = undefined;
  user.resetPasswordToken.expire = undefined;

  await user.save();

  sendResponse(true, 200, "message", "Password Reset Successfully!", res);
});
