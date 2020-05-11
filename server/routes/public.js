const express = require("express");
const {
  getPublics,
  getPublic,
  createPublic,
  updatePublic,
  deletePublic,
  // getVendorsInRadius,
  publicPhotoUpload,
} = require("../controllers/public");

const Public = require("../models/Public");

// Include other resource routers
//const cartRouter = require("./orderlist");//commented
// const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
//router.use("/cart", cartRouter);//commented
// router.use("/:publicId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getVendorsInRadius);

router
  .route("/:publicId/photo")
  .put(protect, authorize("public", "admin"), publicPhotoUpload);

router
  .route("/")
  .get(advancedResults(Public), getPublics)
  .post(protect, authorize("public", "admin"), createPublic);

router
  .route("/:publicId")
  .get(getPublic)
  .put(protect, authorize("public", "admin"), updatePublic)
  .delete(protect, authorize("public", "admin"), deletePublic);

module.exports = router;
