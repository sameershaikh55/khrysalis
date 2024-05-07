const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductDetails,
} = require("../controller/product");

// ROUTES
router
  .route("/")
  .get(allProducts)
  .post(authentication, upload.single("picture"), createProduct);

router
  .route("/:id")
  .get(authentication, getProductDetails)
  .put(authentication, upload.single("picture"), updateProduct)
  .delete(authentication, deleteProduct);

module.exports = router;
