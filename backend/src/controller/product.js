const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ProductModel = require("../models/product");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");
const ErrorHandler = require("../utils/errorhandler");

// ADD
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let bdy = req.body;
  bdy.picture = bdy.upload;
  const products = await ProductModel.create(req.body);
  sendResponse(true, 200, "data", products, res);
});

// DELETE
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await ProductModel.findByIdAndDelete(id);

  if (deleted) {
    const imgPath = path.resolve(
      __dirname,
      "../../" + "public/uploads",
      deleted.picture
    );
    fs.unlinkSync(imgPath);
  }

  sendResponse(true, 200, "product", deleted, res);
});

// UPDATE
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  let bdy = req.body;
  bdy.picture = bdy.upload;

  const updated = await ProductModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  sendResponse(true, 200, "product", updated, res);
});

// Get all
exports.allProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await ProductModel.find();

  sendResponse(true, 200, "products", products, res);
});

// Get product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  sendResponse(true, 200, "product", product, res);
});
