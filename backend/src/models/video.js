import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  view: {
    type: Number,
    default: 0,
  },
  video: {
    type: String,
    trim: true,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  like: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  comment: [
    {
      type: ObjectId,
      ref: "comment",
    },
  ],
  channel: {
    type: ObjectId,
    ref: "channel",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VideoModel = mongoose.model("video", videoSchema);

export default VideoModel;
