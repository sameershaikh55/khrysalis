import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const channelSchema = new Schema({
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
  subscribers: {
    type: Number,
    default: 0,
  },
  channelBG: {
    type: String,
    trim: true,
  },
  channelImage: {
    type: String,
    trim: true,
  },
  video: [
    {
      type: ObjectId,
      ref: "video",
    },
  ],
  user: {
    type: ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChannelModel = mongoose.model("channel", channelSchema);

export default ChannelModel;
