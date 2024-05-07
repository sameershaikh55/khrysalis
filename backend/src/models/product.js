const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  picture: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
